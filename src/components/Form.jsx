import React, { useState } from 'react';
import showeye from '../assets/images/png/show-eye.png'
import Hiddeneye from '../assets/images/png/hidden-eye.png'
import emailjs from 'emailjs-com';

const Form = () => {
    const form = useState();
    // const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('false');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleconfirmPasswordVisibility = () => {
        setConfirmPassword(!confirmPassword);
    };
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your EmailJS user ID
        const userId = 'Ps3ORf547aZkF_ODc';

        // Your EmailJS service ID and template ID
        const serviceId = 'service_itpuhya';
        const templateId = 'template_klvfakh';
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            message: /^[a-zA-Z\s]+$/,
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
            confirmPassword:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "lastname is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "email is invalid.";
        }
        if (!regex.message.test(formData.message)) {
            errors.message = "message is invalid.";
        }
        if (!regex.password.test(formData.password)) {
            errors.password = "Password is invalid.";
        }
        if (!regex.confirmPassword.test(formData.confirmPassword)) {
            errors.confirmPassword = "Confirm password is invalid.";
        }
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            emailjs.send(serviceId, templateId, formData, userId)
                .then((response) => {
                    console.log('Email sent!', response.status, response.text);
                    // Clear form data after successful submission
                    setFormData({
                        name: '',
                        lastname: '',
                        number: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        message: '',
                    });
                    setErrorMessage('');
                }, (error) => {
                    console.error('Email failed to send:', error);
                    setErrorMessage('Failed to send email. Please try again later.');
                });
            setShowSuccessPopup(true);
        }

        // Send email using EmailJS
    }

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            number: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
        });
        setFormErrors({
            name: "",
            lastname: "",
            number: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'number' && !/^\d*$/.test(value)) {
            // If the input is not a digit, don't update the state
            return;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [errorMessage, setErrorMessage] = useState('');
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='container mx-auto px-3 pb-[50px]'>
            <h2 className='text-[48px] font-bold text-black text-center my-[50px]'>Form Validation By Emai-js</h2>
            <form className='max-w-[700px] mx-auto' onSubmit={handleSubmit}>
                <div className="md:flex items-center justify-between">
                    <div className="form-group w-full md:max-w-[330px]" >
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && (
                            <p className="error-message">{formErrors.name}</p>
                        )}
                    </div>
                    <div className="form-group w-full md:max-w-[330px]" >
                        <label htmlFor="lastname">Lastname:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                        {formErrors.lastname && (
                            <p className="error-message">{formErrors.lastname}</p>
                        )}
                    </div>
                </div>
                <div className="md:flex items-center justify-between">
                    <div className="form-group w-full md:max-w-[330px]">
                        <label htmlFor="password">Password:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) => handleChange(e)} // Using handleChange inline
                            />
                            <div className="absolute right-[10px] top-[7px]" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <img src={showeye} alt="showeye" className="max-w-[25px]" />
                                ) : (
                                    <img src={Hiddeneye} alt="showeye" className="max-w-[25px]" />
                                )}
                            </div>
                        </div>
                        {formErrors.password && (
                            <p className="error-message">{formErrors.password}</p>
                        )}
                    </div>
                    <div className="form-group w-full md:max-w-[330px]">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <div className="relative">
                            <input
                                type={confirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) => handleChange(e)}
                                className={formErrors.confirmPassword ? "error" : ""}
                            />
                            <div className="absolute right-[10px] top-[7px]" onClick={toggleconfirmPasswordVisibility}>
                                {confirmPassword ? (
                                    <img src={showeye} alt="showeye" className="max-w-[25px]" />
                                ) : (
                                    <img src={Hiddeneye} alt="showeye" className="max-w-[25px]" />
                                )}
                            </div>
                        </div>
                        {formErrors.confirmPassword && (
                            <p className="error-message">{formErrors.confirmPassword}</p>
                        )}
                    </div>
                </div>
                <form ref={form} onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className='font-normal text-[#131200] text-[16px] opacity-[70%]' htmlFor="email">Email</label>
                        <input className='outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]'
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && (
                            <p className="error-message">{formErrors.email}</p>
                        )}
                    </div>
                </form>
                <div className="form-group">
                    <label htmlFor="number">Number:</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className={formErrors.number ? "error" : ""}
                        maxLength={10}
                    />
                    {formErrors.number && (
                        <p className="error-message">{formErrors.number}</p>
                    )}
                </div>
                <div className="form-group w-full" >
                    <label htmlFor="Message">Message:</label>
                    <textarea className='border-[1px] border-solid border-[#ccc] rounded-[5px] w-full min-h-[100px] p-[15px] pt-[8px]'
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && (
                        <p className="error-message">{formErrors.message}</p>
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
            {showSuccessPopup && (
                <div className="success-popup">
                    <div className="success-popup-box">
                        <p>Form submitted successfully!</p>
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;