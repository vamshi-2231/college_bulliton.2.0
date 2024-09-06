import { useState, useEffect } from "react";
import { auth, db, storage } from "../config/firebase";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Auth from "../components/Auth";
import CollegeCard from "../components/CollegeCard";
import "./AdminPage.css";

function AdminPage() {
  const [collegeList, setCollegeList] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newCollege, setNewCollege] = useState({ title: "", description: "" });
  const [imageUpload, setImageUpload] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const collegesCollectionRef = collection(db, "college");

  const getCollegeList = async () => {
    try {
      const data = await getDocs(collegesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCollegeList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      if (user) {
        getCollegeList();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCreateCollege = async () => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collegesCollectionRef, newCollege);

      if (imageUpload) {
        const imageRef = ref(storage, `collegeImages/${docRef.id}`);
        await uploadBytes(imageRef, imageUpload);
        const imageUrl = await getDownloadURL(imageRef);
        await updateDoc(docRef, { imageUrl });
      }

      setNewCollege({ title: "", description: "" });
      setImageUpload(null);
      getCollegeList();
      setMessage("College added successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error adding college.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCollege = async (id, updatedData, newImageUpload) => {
    setIsLoading(true);
    try {
      const collegeDoc = doc(db, "college", id);

      // Check if a new image was uploaded
      if (newImageUpload) {
        const imageRef = ref(storage, `collegeImages/${id}`);
        await uploadBytes(imageRef, newImageUpload);
        const imageUrl = await getDownloadURL(imageRef);
        updatedData.imageUrl = imageUrl; // Add image URL to update
      }

      await updateDoc(collegeDoc, updatedData);
      getCollegeList();
      setMessage("College updated successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error updating college.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-page">
      {isAuthenticated ? (
        <div>
          <header className="admin-header">
            <p className="welcome-message">Welcome, {auth.currentUser.email}</p>
            <button className="sign-out-button" onClick={() => auth.signOut()}>Sign Out</button>
          </header>
          <div className="admin-content">
            <div className="crud-forms">
              <div className="create-college">
                <h2>Add College</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={newCollege.title}
                  onChange={(e) => setNewCollege({ ...newCollege, title: e.target.value })}
                />
                <textarea
                  placeholder="Description"
                  value={newCollege.description}
                  onChange={(e) => setNewCollege({ ...newCollege, description: e.target.value })}
                  rows={4}
                />
                <input
                  type="file"
                  onChange={(e) => setImageUpload(e.target.files[0])}
                />
                <button
                  onClick={handleCreateCollege}
                  disabled={isLoading}
                >
                  {isLoading ? "Adding College..." : "Add College"}
                </button>
              </div>
            </div>

            <div className="message">{message && <div>{message}</div>}</div>
            <div className="college-list">
              {collegeList.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  onUpdate={handleUpdateCollege} // Handle update with image
                  isAdmin={isAuthenticated}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Auth
          onSignIn={() => setIsAuthenticated(true)}
          onSignOut={() => setIsAuthenticated(false)}
        />
      )}
    </div>
  );
}

export default AdminPage;
