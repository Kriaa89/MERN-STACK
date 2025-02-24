import { useState } from "react";
const UserForm = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ firstNameError, setFirstNameError] = useState("");
    const [ lastName, setlastName ] = useState("");
    const [ lastNameError, setLastNameError] = useState("");
    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordError, setPasswordError] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        }else if (e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        }else if (e.target.value.length < 2){
            setLastNameError("Last Name msut be at least 2 characters")
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        }else if (e.target.value.length < 8){
            setEmailError("Email msut be at least 8 characters")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
        }else if (e.target.value.length < 8){
            setEmailError("Password must be at least 8 characters")
        } else {
            setEmailError("");
        }
        if (confirmPassword.length > 0 && e.target.value !== confirmPassword) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }


    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value < 1) {
            setConfirmPasswordError("");
        } else if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <form>
            <div>
                <label >First Name: </label>
                <input type="text" value={firstName} onChange={handleFirstName}/>
                {  firstNameError ? <p>{firstNameError}</p>: ""}
            </div>
            <div>
                <label >Last  Name: </label>
                <input type="text" value={lastName} onChange={handleLastName}/>
                {  lastNameError ? <p>{lastNameError}</p>: ""}
            </div>
            <div>
                <label >Email: </label>
                <input type="text" value={email} onChange={handleEmail}/>
                {  emailError ? <p>{emailError}</p>: ""}
            </div>
            <div>
                <label >Password: </label>
                <input type="password" value={password} onChange={handlePassword}/>
                {  passwordError ? <p>{passwordError}</p>: ""}
            </div>
            <div>
                <label >Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                {  confirmPasswordError ? <p>{confirmPasswordError}</p>: ""}
            </div>
        </form>
    );

};

export default UserForm;