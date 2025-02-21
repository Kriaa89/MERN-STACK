import React, {useState} from "react";
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const chanheHandler = (e) => {
        setFormData(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        })) 
    };
    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName" value={formData.firstName} onChange={(e)=>chanheHandler(e)}/>
                <label>Last Name: </label>
                <input type="text" name="lastName" value={formData.lastName} onChange={(e)=>chanheHandler(e)}/>
                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={(e)=>chanheHandler(e)}/>
                <label>Password:</label>
                <input type="text" name="password" value={formData.password} onChange={(e)=>chanheHandler(e)}/>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={(e)=>chanheHandler(e)}/>
            </form>
            <div>
                <h2>Your Data Form </h2>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.firstName}</p>
                <p>Email: {formData.firstName}</p>
                <p>Password: {formData.firstName}</p>
                <p>Confirm Password: {formData.firstName}</p>
            </div>
        </div>
        
    );
};
export default Form;