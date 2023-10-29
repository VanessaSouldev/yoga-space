import React from 'react';
import './YogaPoseSearchInput.css';





function YogaPoseSearchInput({
                          idAttribute,
                          nameAttribute,
                          required,
                          stateValue,
                          stateSetter,
                          labelText}) {

    return  (
        <>

                    <label className="heading-yogapose-search-bar"
                    htmlFor={idAttribute}>
                        <h4>{labelText}</h4>
                    </label>
                    <input
                        className="input-search-bar"
                        type="text"
                        id={idAttribute}
                        name={nameAttribute}
                        value={stateValue} required={required}
                        onChange={(enable) => stateSetter('')}/>

        </>

    );
}
export default YogaPoseSearchInput;