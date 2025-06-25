// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingPage from "./pages/LoadingPage";
import InkTrailCursor from "./components/Trail";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [setLoadingFinished] = useState(false);
  const location = useLocation();
  
  // Don't show navbar on loading page
  const showNavBar = location.pathname !== '/';

  useEffect(() => {
    const timer = setTimeout(() => setLoadingFinished(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, x: -20, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20, scale: 0.98 }
  };

  const pageTransition = {
    duration: 0.4,
    ease: "easeInOut"
  };

  return (
    <div className="App bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <InkTrailCursor />
      {showNavBar && <NavBar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <LoadingPage />
            </motion.div>
          } />
          <Route path="/home" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <AboutPage />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ProjectsPage />
            </motion.div>
          } />
          <Route path="/experience" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ExperiencePage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ContactPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      {showNavBar && <Footer />}
    </div>
  );
}

export default App;
