import './ProfilePageToQuestionnaireButton.css';
import {useHistory} from "react-router-dom";


function ProfilePageToQuestionnaireButton({   type = "button",
                              children
                          }) {


    const history = useHistory();

    function handleClickToQuestionnaire() {
        history.push("/welcomepage");
    }

    return  (
        <div>

            <button
                type={type}
                onClick={handleClickToQuestionnaire}
                className="profile-page-to-questionnaire-button">
                {children}
            </button>
        </div>

    );
}
export default ProfilePageToQuestionnaireButton;