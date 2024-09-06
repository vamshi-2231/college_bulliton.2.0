import { useState, useEffect } from "react";
import { db } from "../config/firebase"; // Ensure this path is correct
import { doc, getDoc } from "firebase/firestore";
import "./DemoPage.css"; // Optional: Create a CSS file for styling

function DemoPage() {
  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DOCUMENT_ID = "MRLrBhBGDBfl0ctt56HX"; // Define the document ID here

  const getCollegeData = async () => {
    try {
      const collegeDocRef = doc(db, "college", DOCUMENT_ID); // Reference to the specific document
      const collegeDoc = await getDoc(collegeDocRef); // Get the document

      if (collegeDoc.exists()) {
        setCollegeData(collegeDoc.data()); // Set the college data
      } else {
        setError("No such document!");
      }
    } catch (err) {
      console.error("Error fetching college data:", err);
      setError("Error fetching college data.");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    getCollegeData(); // Fetch college data on component mount
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div className="demo-page">
      {collegeData && (
        <div className="college-details">
          <img src={collegeData.imageUrl} alt={collegeData.title} className="college-image" />
          <h1>{collegeData.title}</h1>
          <p>{collegeData.description}</p>
        </div>
      )}
    </div>
  );
}

export default DemoPage;
