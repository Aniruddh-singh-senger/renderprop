import React,{useState} from 'react';
import './FormsINput.css';

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
      };

    const {label,errorMessage ,onChange, ...input} = props

    return (
        <>
          <div className="forminput">
              <label>{label}</label>
              <input {...input} onChange={onChange}  
        onBlur={handleFocus}
        onFocus={() =>
          input.name === "confirmPassword" && setFocused(true)} focused={focused.toString()} /> 
              <span>{errorMessage}</span>
          </div>  
        </>
    )
}

export default FormInput;
