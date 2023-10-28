import React from 'react';
import './AnswersInput.css';





function AnswersInput({
                      idAttribute,
                      nameAttribute,
                      required,
                      stateValue,
                      stateSetter,
                      labelText}) {

    return  (
    <>
        <div className="answers-container">
<div className="answers-input">
    <input
           type="radio"
           id={idAttribute}
           name={nameAttribute}
           value={stateValue} required={required}
           onClick={(enable) => stateSetter('')}/>
        <label
            htmlFor={idAttribute}>
            {labelText}
    </label>
    </div>
        </div>
    </>

);
}
    export default AnswersInput;