import React from 'react'

const Contact = (props) => {

    const add = (a, b) => a + b;

    const subs = (a, b) => Math.abs(a - b);

    const mult = (a, b) => a * b;

    const calculator = (num1, num2, operator) => {
        return operator(num1, num2);
    }

    console.log(calculator(5, 6, add));
    console.log(calculator(5, 6, subs));
    console.log(calculator(5, 6, mult));

    return (
        <>
            <div className="input" >
                <h1>Hello this is {props.name} page and also we try (HOC) high order function please open console to check HOC </h1>
            </div>
        </>
    )
}

export default Contact;
