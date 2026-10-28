
const students = [
    {
        id: "SD001",
        name: "Jean Claude",
        trade: "Software Development"
    },
    {
        id: "SD002",
        name: "Alice Uwase",
        trade: "Software Development"
    },
    {
        id: "SD003",
        name: "Eric Niyonzima",
        trade: "Software Development"
    },
    {
        id: "SD004",
        name: "Diane Mukamana",
        trade: "Software Development"
    },
    {
        id: "SD005",
        name: "Patrick Habimana",
        trade: "Software Development"
    }
];

function Students({ schoolName }) {
    return (
        <section>
            <h2>Our Students</h2>

            <p>
                School: {schoolName}
            </p>

            <p>
                The following is a list of students in our class.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Trade</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.trade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>Total Students: {students.length}</p>
        </section>
    );
}

export default Students;
