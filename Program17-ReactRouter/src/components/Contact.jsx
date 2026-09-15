import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Full Name cannot be empty";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile Number must contain exactly 10 digits";
        }

        if (formData.subject.trim() === "") {
            newErrors.subject = "Subject cannot be empty";
        }

        if (formData.message.trim().length < 20) {
            newErrors.message = "Message must contain at least 20 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form Submitted Successfully");

            setFormData({
                name: "",
                email: "",
                mobile: "",
                subject: "",
                message: ""
            });
        }
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Full Name</label>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {errors.name && <span className="error">{errors.name}</span>}

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {errors.email && <span className="error">{errors.email}</span>}

                <label>Mobile Number</label>

                <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                />

                {errors.mobile && <span className="error">{errors.mobile}</span>}

                <label>Subject</label>

                <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                {errors.subject && <span className="error">{errors.subject}</span>}

                <label>Message</label>

                <textarea
                    rows="5"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                {errors.message && <span className="error">{errors.message}</span>}

                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;