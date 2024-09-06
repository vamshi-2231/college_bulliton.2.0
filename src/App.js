import './App.css';
import './components/Style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function StaticLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <>
              <Header /> {/* Dynamic Navbar */}
              <AdminPage /> {/* AdminPage should be the only page */}
              <Footer /> {/* Dynamic Footer */}
            </>
          }
        />
        
        {/* Static Pages Routes */}
        <Route path="/home" element={<StaticLayout><HomePage /></StaticLayout>} />
        <Route path="/about" element={<StaticLayout><AboutPage /></StaticLayout>} />
        <Route path="/services" element={<StaticLayout><ServicesPage /></StaticLayout>} />
        <Route path="/projects" element={<StaticLayout><ProjectPage /></StaticLayout>} />
        <Route path="/contact" element={<StaticLayout><ContactPage /></StaticLayout>} />
        
        {/* Catch all other routes and show Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
