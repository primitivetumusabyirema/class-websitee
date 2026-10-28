
function About({ schoolName }) {
    return (
        <section>
            <h2>About Our Class</h2>

            <p>
                Welcome to the Software Development class at {schoolName}.
            </p>

            <h3>Purpose of the Website</h3>
            <p>
                The purpose of this website is to share information about
                our class, introduce students, explain our subjects, and
                help visitors contact the school.
            </p>

            <h3>About Software Development</h3>
            <p>
                Software Development involves designing, creating, testing,
                and maintaining computer programs and applications.
                Students learn how to solve problems using technology
                and build useful software.
            </p>

            <h3>Subjects and Skills We Learn</h3>
            <ul>
                <li>Web Development using HTML, JavaScript, and ReactJS</li>
                <li>Programming Fundamentals and Problem Solving</li>
                <li>Database Design and Management</li>
                <li>Software Testing and Debugging</li>
                <li>Computer Systems and Networking Fundamentals</li>
                <li>Teamwork and Project Management</li>
            </ul>
        </section>
    );
}

export default About;
