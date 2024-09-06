import './App.css';
import './components/Style.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound'; // Import NotFoundPage component
import DemoPage from './pages/DemoPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function StaticPages() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
}

function AdminRoute() {
  return (
    <>
      <Header /> {/* Dynamic Navbar */}
      <AdminPage /> {/* AdminPage should be the only page */}
      <Footer /> {/* Dynamic Footer */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/demo" element={<DemoPage />} />
        
        {/* Static Pages Route */}
        <Route path="/" element={<StaticPages />} />
        
        {/* Catch all other routes and show Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
