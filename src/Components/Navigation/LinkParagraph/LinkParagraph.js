import './LinkParagraph.css';
import {Link} from "react-router-dom";
import React from "react";


function LinkParagraph({
                           children, path,
                       }) {


    return (

        <Link
            to={path}>
            {children}
        </Link>

    );
}

export default LinkParagraph;