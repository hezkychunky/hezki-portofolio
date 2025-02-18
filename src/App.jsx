import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import GreenBlob from "./components/images/image";
import Project from "./components/project-section";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="px-4 lg:px-6">
          <GreenBlob />
          <Hero />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
