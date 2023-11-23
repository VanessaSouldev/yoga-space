import styles from './WelcomePageandQuestionnaire.module.css';
import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../Context/AuthContext";
import waters from '../../assets/images/lilac-waters.jpg';
import AnswersInput from "../../Components/WelcomePageQuestionnaire/AnswersInput";
import axios from "axios";
import Button from "../../Components/Button/Button";
import Questions from "../../Components/WelcomePageQuestionnaire/Questions";
import LogoutLink from "../../Components/Navigation/LogoutLink/LogoutLink";
import LinkParagraph from "../../Components/Navigation/LinkParagraph/LinkParagraph";


function WelcomePageAndQuestionnaire() {

    const {user} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);
    const history = useHistory();
    const [time, setTime] = useState('');
    const [intensity, setIntensity] = useState('');
    const [focus, setFocus] = useState('');
    const [quoteT, setQuoteT] = useState('');
    const [quoteA, setQuoteA] = useState('');



    useEffect(() => {

        async function getQuotes() {
            const random = Math.floor(Math.random() * 15)
            try {
                const result = await axios.get(`https://type.fit/api/quotes`,)
                console.log(result.data[random])

                let Author = result.data[random].author;
                let indexOf = Author.indexOf(",");
                let includes = Author.includes(",")
                if (includes === true) {
                    setQuoteA(Author.substring(0, indexOf));
                } else {
                    setQuoteA(Author);
                }
                setQuoteT(result.data[random].text);
            } catch (e) {
                console.error(e);
            }

        }

        getQuotes()


    }, []);


    async function handleSubmit(e) {
        e.preventDefault(e)

        try {
            history.push("/videopage");


        } catch (e) {
            console.error(e)

        }
    }

    useEffect(() => {
        user.time = time;
        user.intensity = intensity;
        user.focus = focus;

    }, [user, time, intensity, focus]);

    return (
        <>
            <LogoutLink
                clickhandler={logout}>
                Sign out
            </LogoutLink>

            <div className={styles["rectangle-container"]}>
                <img className={styles.rectangle} src={waters} alt="lilac waters"/>
                <h4 className={styles.header}>
                    Welcome Back {user.username}
                </h4>
            </div>
            <div className={styles["quote-container"]}>
                <div className={styles.quote}>
                    "{quoteT}"
                    <br/> {quoteA}
                </div>
            </div>
            <form onSubmit={handleSubmit} className={styles["questionnaire-form"]}>
                <div className={styles["questions-container-1"]}>
                    <Questions>
                        How much time do you have today?
                    </Questions>
                        </div>
                    <div className={styles["answers-container-1"]}>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="time"
                            nameAttribute="time"
                            stateValue={'time'}
                            stateSetter={() => setTime('short')}
                            labelText="less than 5 minutes"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="time"
                            nameAttribute="time"
                            stateValue={'time'}
                            stateSetter={() => setTime('medium')}
                            labelText="5 - 20 minutes"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="time"
                            nameAttribute="time"
                            stateValue={'time'}
                            stateSetter={() => setTime('long')}
                            labelText="20 minutes or more"/>
                    </div>
                <div className={styles["questions-container-2"]}>
                    <Questions>
                        What kind of yoga are you up for?
                    </Questions>
                    </div>
                    <div className={styles["answers-container-2"]}>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="intensity"
                            nameAttribute="intensity"
                            stateValue={'intensity'}
                            stateSetter={() => setIntensity('beginner')}
                            labelText="Beginner"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="intensity"
                            nameAttribute="intensity"
                            stateValue={'intensity'}
                            stateSetter={() => setIntensity('yin')}
                            labelText="Yin yoga (relaxing)"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="intensity"
                            nameAttribute="intensity"
                            stateValue={'intensity'}
                            stateSetter={() => setIntensity('advanced')}
                            labelText="Advanced"/>
                    </div>
                <div className={styles["questions-container-3"]}>
                    <Questions>
                        What would you like to focus on?
                    </Questions>
                </div>
                        <div className={styles["answers-container-3"]}>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="focus"
                            nameAttribute="focus"
                            stateValue={'focus'}
                            stateSetter={() => setFocus('backpain')}
                            labelText="Back pain"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="focus"
                            nameAttribute="focus"
                            stateValue={'focus'}
                            stateSetter={() => setFocus('stress')}
                            labelText="Stress relief"/>
                        <AnswersInput
                            required={true}
                            type="radio"
                            idAttribute="focus"
                            nameAttribute="focus"
                            stateValue={'focus'}
                            stateSetter={() => setFocus('depression' && 'positivity')}
                            labelText="Depression / Yoga to uplift"/>
                        </div>
                    <Button
                    type={"submit"}
                    className={"questionnaire-submit-button"}>
                        Bring it on!
                    </Button>
            </form>

            <p className={styles["homepage-paragraph"]}>
                To return to the Homepage click
                <LinkParagraph
                    path={"/"}>
                    here
                </LinkParagraph>
            </p>
        </>
    );
}

export default WelcomePageAndQuestionnaire;