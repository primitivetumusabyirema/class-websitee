
function Contact({ schoolName, onHome }) {
    return (
        <section>
            <h2>Contact Us</h2>

            <p>School Name: {schoolName}</p>
            <p>Location: Kigali, Rwanda</p>
            <p>
                Email: <a href="mailto:info@example.com">
                    info@example.com
                </a>
            </p>

            <p>
                Please contact the school for further information
                about the Software Development class.
            </p>

            <button onClick={onHome}>
                Return to Home
            </button>
        </section>
    );
}

export default Contact;
