import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  const [loading, setLoading] = useState(true); // start with loading = true

  useEffect(() => {
    // After 2 seconds, hide the loader
    const timer = setTimeout(() => setLoading(false), 2000);

    // cleanup timer if App unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // show loader while loading = true
      ) : (
        <>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
          {/* later add About, Projects, Contact here */}
        </>
      )}
    </div>
  );
}

export default App;
