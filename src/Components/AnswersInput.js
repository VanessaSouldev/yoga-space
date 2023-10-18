import React from 'react';



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