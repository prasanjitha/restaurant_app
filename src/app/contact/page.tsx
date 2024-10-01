"use client"
import { useState } from 'react';
import styles from './contact.module.css';

interface FormData {
    fullName: string;
    age: string;
    birthdate: string;
    gender: string;
    preferredContactMethods: string[];
    email: string;
    contactNumber: string;
    feedback: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        age: '',
        birthdate: '',
        gender: '',
        preferredContactMethods: [],
        email: '',
        contactNumber: '',
        feedback: ''
    });

    const [submittedData, setSubmittedData] = useState<FormData[]>([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                preferredContactMethods: checked
                    ? [...prevData.preferredContactMethods, value]
                    : prevData.preferredContactMethods.filter((method) => method !== value)
            }));
        } else if (type === 'radio') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Check if all required fields are filled
        if (Object.values(formData).some(value => value === '' || (Array.isArray(value) && value.length === 0))) {
            alert('Please fill in all required fields.');
            return;
        }

        setSubmittedData((prevData) => [...prevData, formData]);
        setSuccessMessage('Form submitted successfully!');
        setFormData({
            fullName: '',
            age: '',
            birthdate: '',
            gender: '',
            preferredContactMethods: [],
            email: '',
            contactNumber: '',
            feedback: ''
        });

        console.log('Form submitted:', formData);
        console.log('All submissions:', submittedData);

        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            age: '',
            birthdate: '',
            gender: '',
            preferredContactMethods: [],
            email: '',
            contactNumber: '',
            feedback: ''
        }); 
    }


    return (
        <div className={styles.container}>
            <section className={styles.contact}>
                <h1>Contact Us & Testimonials</h1>
                <p>We value your feedback! Please use the form below to share your experience or reach out to us.</p>

                {successMessage && <div className={styles.successMessage}>{successMessage}</div>}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroupRow}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroupRow}>
                        <input
                            type="text"
                            name="age"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroupRow}>
                        <input
                            type="date"
                            name="birthdate"
                            placeholder="Select your birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroupRowWithLabel}>
                        <label>Gender:</label>
                        <div className={styles.gender}>
                            <label>
                                <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Other" onChange={handleChange} required /> Other
                            </label>
                        </div>
                    </div>

                    <div className={styles.formGroupRowWithLabel}>
                        <label>Preferred Contact Methods:</label>
                        <div className={styles.contactMethods}>
                            <label>
                                <input type="checkbox" value="Email" onChange={handleChange} /> Email
                            </label>
                            <label>
                                <input type="checkbox" value="Call" onChange={handleChange} /> Call
                            </label>
                            <label>
                                <input type="checkbox" value="Text" onChange={handleChange} /> Text
                            </label>
                        </div>
                    </div>

                    <div className={styles.formGroupRow}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroupRow}>
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroupRow}>
                        <textarea
                            name="feedback"
                            placeholder="Share your feedback with us"
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className={styles.buttons}>
                        <button type="reset" onClick={handleReset} className={styles.resetButton}>Reset</button>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
