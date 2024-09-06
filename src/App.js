import './App.css';
import './components/Style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound'; // Import NotFoundPage component
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function StaticPages() {
  return (
    <>
      <Header />
      <div id="/"><HomePage /></div>
      <div id="/about"><AboutPage /></div>
      <div id="/services"><ServicesPage /></div>
      <div id="/projects"><ProjectPage /></div>
      <div id="/contact"><ContactPage /></div>
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
        
        {/* Static Pages Route */}
        <Route path="/" element={<StaticPages />} />
        
        {/* Catch all other routes and show Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
