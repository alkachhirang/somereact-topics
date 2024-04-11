import { useState } from "react";
import showeye from '../assets/images/png/show-eye.png'
import Hiddeneye from '../assets/images/png/hidden-eye.png'
const FormValidation = () => {

    const [password, setPassword] = useState('');
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
        password: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        number: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setPassword(e.target.value);
        setConfirmPassword(e.target.value);
        const { name, value } = e.target;
        if (name === 'number' && !/^\d*$/.test(value)) {
            // If the input is not a digit, don't update the state
            return;
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
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
            lastname: "",
            number: "",
            password: "",
            confirmPassword: "",
        });
    };
    return (
        <>
            <div className="container mx-auto px-3 pb-5">
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
                            // className={formErrors.lastname ? "error" : ""}
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
        </>
    );
};

export default FormValidation;
