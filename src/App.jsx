import { useState, useEffect } from "react";
import "./App.scss";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Notfount/NotFound";
import Loader from "./Components/Loader/Loader";
import Versions from "./Components/Versions/Versions";
import Profile from "./Components/Profile/Profile"; 
import BlogsPage from "./Components/blog/BlogsPage"
import BlogPost from "./Components/Blog/Blog/BlogPost";

const App = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => setTheme(!theme);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className={`bg bg-light ${theme ? "bg-dark" : ""}`}></div>
          <div className={`main ${theme ? "dark-mode" : ""}`}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/update" element={<Versions />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
