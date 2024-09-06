import { useState, useEffect } from "react";
import { db } from "../config/firebase"; // Ensure this path is correct
import { doc, getDoc } from "firebase/firestore";
// import "./ProjectsPage.css"; // Assuming you have a CSS file for styling

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Array of document IDs for each project
  const projectDocumentIds = [
    "MRLrBhBGDBfl0ctt56HX", // Replace these with your actual document IDs
    "0FgojDRhWIaW7iPledPB",
    "ZnBGYezhNZfn568Hb5UZ",
    "cZV07p1MJ7mCHBxpxww5",
    "oiNLARS1hZm7EV5zbO73",
  ];

  // Function to fetch project data based on the document ID
  const fetchProjects = async () => {
    try {
      const projects = [];
      for (const docId of projectDocumentIds) {
        const projectDocRef = doc(db, "college", docId); // Adjust the collection path as needed
        const projectDoc = await getDoc(projectDocRef);

        if (projectDoc.exists()) {
          projects.push({ id: docId, ...projectDoc.data() }); // Add document data with ID
        } else {
          console.error(`No such document with ID: ${docId}`);
        }
      }
      setProjectsData(projects);
    } catch (err) {
      console.error("Error fetching project data:", err);
      setError("Error fetching project data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(); // Fetch the project data on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Recent <span>updates</span></h1>
        </div>
        <div className="all-projects">
          {projectsData.map((project, index) => (
            <div className="project-item" key={project.id}>
              <div className="project-info">
                <h2>{project.title || "Untitled Project"}</h2> {/* Use title from Firestore */}
                <p>{project.description || "No description available."}</p> {/* Use description from Firestore */}
              </div>
              <div className="project-img">
                <img
                  src={project.imageUrl || "./img/placeholder.png"} // Fallback to placeholder image if none
                  alt={project.title || "Project Image"}
                />
              </div>
            </div>
            
            
          ))}
        </div>
      </div>
    </section>
  );
}
