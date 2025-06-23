// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import InkTrailCursor from "./components/Trail";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [setLoadingFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingFinished(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <InkTrailCursor />
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
