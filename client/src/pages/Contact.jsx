import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }

    // Tackle our handle input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    // Handle form getFormSubmissionInfo
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                toast.success("Message sent successfully");
            }
        } catch (error) {
            toast.error("Message not delivered");
            console.log(error);
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact us</h1>
                </div>

                {/* Contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708527600&semt=sph" alt="contact-form" />
                    </div>

                    {/* Contact form content */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="8">
                                </textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.941849174607!2d77.11393427544246!3d28.63150488412738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0351baff6933%3A0x48a94e3504dadb9e!2sGuru%20Tegh%20Bahadur%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708582207935!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </>
    );
};