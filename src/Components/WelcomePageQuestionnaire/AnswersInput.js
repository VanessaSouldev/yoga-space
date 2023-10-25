import React from 'react';
import './AnswersInput.css';





function AnswersInput({
                      children,
                      idAttribute,
                      nameAttribute,
                      required,
                      stateValue,
                      stateSetter,
                      labelText}) {

    return  (
    <>
        <p className="questions">
            {children}
        </p>
<div className="answers-input">
    <input

           type="radio"
           id={idAttribute}
           name={nameAttribute}
           // className="answers-input"
           value={stateValue} required={required}
           onClick={(enable) => stateSetter('')}/>
        <label
            htmlFor={idAttribute}>
            {labelText}
            {/*className="answers-input"*/}
    </label>
    </div>
    </>

);
}
    export default AnswersInput;