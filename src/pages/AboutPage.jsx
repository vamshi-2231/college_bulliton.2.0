import React, { useState, useEffect } from "react";
import { db } from "../config/firebase"; // Adjust based on your project setup
import { doc, getDoc } from "firebase/firestore";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const docId = "NP0vpEHgXbUCsGXNVpxr"; // Document ID for the "About" section

  useEffect(() => {
    // Function to fetch the document from Firestore
    const fetchAboutData = async () => {
      try {
        const aboutDocRef = doc(db, "college", docId); // Adjust collection path if needed
        const aboutDoc = await getDoc(aboutDocRef);

        if (aboutDoc.exists()) {
          setAboutData(aboutDoc.data());
        } else {
          setError("Document not found");
        }
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData(); // Fetch the data on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img
              src={aboutData?.imageUrl || "./img/img-24.png"} // Fallback image
              alt="About College"
            />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>{aboutData?.title || "College"}</span>
          </h1>
          <p>{aboutData?.description || "No description available."}</p>
          <a href={aboutData?.link || "https://www.vaagdevi.edu.in/"} className="cta">
            For more info
          </a>
        </div>
      </div>
    </section>
  );
}
