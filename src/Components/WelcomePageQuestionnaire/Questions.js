import React from 'react';
import './Questions.css';


function Questions({
                       children
                   }) {

    return (<>
            <p className="questions">
                {children}
            </p>

        </>

    );
}

export default Questions;