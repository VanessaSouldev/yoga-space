import './QuestionnaireSubmitButton.css';




function QuestionnaireSubmitButton({  type = "submit", children
                              }) {

    return (

        <>
            <button
                type={type}
                className="questionnaire-submit-button">
                {children}
            </button>
        </>

    );

}

export default QuestionnaireSubmitButton