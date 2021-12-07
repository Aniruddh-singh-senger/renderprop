import React, { useState } from 'react';
import "./Apps.css";
import FormInput from './FormInput';


const App = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        birthday: "",
        confirmPassword: "",
    });

    const input = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            errorMessage: "User should be 3-16 characters and don't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            placeholder: 'Username',
            label: 'Username',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            errorMessage: "It should be a valid email address",
            placeholder: 'Email',
            label: 'Email'
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            placeholder: 'Password',
            label: 'Password',
            required: true
        },
        {
            id: 5,
            name: 'confirmpassword',
            type: 'password',
            placeholder: 'ConfirmPassword',
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]


    const Submits = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="App" >
                <form onSubmit={Submits}>
                    <h1>Register Here</h1>
                    {input.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />))}
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default App
