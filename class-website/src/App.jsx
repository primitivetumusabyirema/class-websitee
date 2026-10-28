
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import Contact from "./Contact";

function App() {
  const schoolName = "Rwanda Technical Board";
  const [currentPage, setCurrentPage] = useState("Home");

  function handleNavigation(page) {
    setCurrentPage(page);
  }

  function renderPage() {
    switch (currentPage) {
      case "About":
        return <About schoolName={schoolName} />;
      case "Students":
        return <Students schoolName={schoolName} />;
      case "Contact":
        return (
          <Contact
            schoolName={schoolName}
            onHome={() => handleNavigation("Home")}
          />
        );
      default:
        return (
          <Home
            schoolName={schoolName}
            onNavigate={handleNavigation}
          />
        );
    }
  }

  return (
    <main>
      <h1>{schoolName}</h1>

      <nav aria-label="Main navigation">
        <button onClick={() => handleNavigation("Home")}>
          Home
        </button>{" "}
        <button onClick={() => handleNavigation("About")}>
          About
        </button>{" "}
        <button onClick={() => handleNavigation("Students")}>
          Students
        </button>{" "}
        <button onClick={() => handleNavigation("Contact")}>
          Contact
        </button>
      </nav>

      <hr />

      {renderPage()}

      <hr />
      <footer>
        <p>Class Website - Software Development</p>
      </footer>
    </main>
  );
}

export default App;
