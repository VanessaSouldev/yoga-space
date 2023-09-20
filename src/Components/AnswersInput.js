import React from 'react';
import styles from "../Pages/Questionnaire/WelcomePageandYogaQuestionnaire.module.css";


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
            htmlFor={idAttribute}
            className={styles.answers}>
            {labelText}
    </label>
    </>

);
}
    export default AnswersInput;