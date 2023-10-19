import React from 'react';
import './AnswersInput.css';



function AnswersInput({idAttribute,
                      nameAttribute,
                      required,
                      stateValue,
                      stateSetter,
                      labelText}) {

    return  (
    <>

    <input

           type="radio"
           id={idAttribute}
           name={nameAttribute}
           className="answers-input"
           value={stateValue} required={required}
           onClick={(enable) => stateSetter('')}/>
        <label
            htmlFor={idAttribute}>
            {labelText}
    </label>
    </>

);
}
    export default AnswersInput;