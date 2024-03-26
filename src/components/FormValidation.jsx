import { useState } from "react";
const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
            confirmPassword:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
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
            setShowSuccessPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            number: "",
            password: "",
            confirmPassword: "",
        });
        setFormErrors({
            name: "",
            number: "",
            password: "",
            confirmPassword: "",
        });
    };
    return (
        <>
            <div className="container mx-auto px-3">
                <h2 className="text-black text-center text-[35px] md:text-[48px] font-bold mb-5">Form-Validation</h2>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="md:flex items-center justify-between">
                        <div className="form-group w-full md:max-w-[330px]" >
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            // className={formErrors.name ? "error" : ""}
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
                            // className={formErrors.name ? "error" : ""}
                            />
                            {formErrors.name && (
                                <p className="error-message">{formErrors.name}</p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex items-center justify-between">
                        <div className="form-group w-full md:max-w-[330px]">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={formErrors.password ? "error" : ""}
                            />
                            {formErrors.password && (
                                <p className="error-message">{formErrors.password}</p>
                            )}
                        </div>
                        <div className="form-group w-full md:max-w-[330px]">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={formErrors.confirmPassword ? "error" : ""}
                            />
                            {formErrors.confirmPassword && (
                                <p className="error-message">{formErrors.confirmPassword}</p>
                            )}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className={formErrors.number ? "error" : ""}
                        />
                        {formErrors.number && (
                            <p className="error-message">{formErrors.number}</p>
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
                        <p>Form submitted successfully!</p>
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default FormValidation;

