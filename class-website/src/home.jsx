
import { useState } from "react";

function Home({ schoolName, onNavigate }) {
    const [clickCount, setClickCount] = useState(0);

    return (
        <section>
            <h2>Welcome to Our Class Website</h2>

            <p>School: {schoolName}</p>
            <p>Class Level: Level 5</p>
            <p>Trade: Software Development</p>

            <h3>About Our Class</h3>
            <p>
                Welcome to our Software Development class website.
                This website introduces our class, presents our students,
                and explains the subjects and skills we learn.
            </p>

            <p>
                Our goal is to develop practical computer programming
                skills, teamwork, creativity, and problem-solving abilities.
            </p>

            <h3>Explore Our Website</h3>

            <button onClick={() => onNavigate("About")}>
                Learn About Our Class
            </button>{" "}
            <button onClick={() => onNavigate("Students")}>
                View Students
            </button>{" "}
            <button onClick={() => onNavigate("Contact")}>
                Contact Our School
            </button>

            <h3>React Click Counter</h3>
            <p>You have clicked the button {clickCount} times.</p>

            <button onClick={() => setClickCount(clickCount + 1)}>
                Click Me
            </button>

            <button onClick={() => setClickCount(0)}>
                Reset Counter
            </button>
        </section>
    );
}

export default Home;
