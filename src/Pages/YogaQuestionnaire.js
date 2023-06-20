import styles from './YogaQuestionnaire.module.css';
import {useContext} from "react";
import { Link, useHistory } from 'react-router-dom';

import waters from '../Images/lilac-waters.jpeg';





function YogaQuestionnaire() {

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            history.push('/videopage')


        } catch (e) {
            console.error(e);
        }

    }


    return (
        <>
            <main>
                <img className={styles.rectangle} src={waters} alt="lilac waters"/>
                <form>
                    <div className={styles["questions-container"]}>
                    <p className={styles.questions}>
                        How much time do you have today?
                    </p>
                    <div>
                        <input type="radio" value="10-20" name="time" /> <output className={styles.answers}>10 - 20 minutes</output>
                        <br/>
                        <input type="radio" value="20-30" name="time" /> <output className={styles.answers}>20 - 30 minutes</output>
                        <br/>
                        <input type="radio" value="30 or more" name="time" /> <output className={styles.answers}> 30 minutes or more</output>
                    </div>
                    <p className={styles.questions}>
                        What kind of yoga are you up for?
                    </p>
                    <div>
                        <input type="radio" value="Beginners" name="intensity-level" /> <output className={styles.answers}>Beginners</output>
                        <br/>
                        <input type="radio" value="Yin" name="intensity-level" /> <output className={styles.answers}>Relaxing(yin yoga)</output>
                        <br/>
                        <input type="radio" value="Intense" name="intensity-level" /> <output className={styles.answers}>Intense I'm fired up!</output>
                    </div>
                    <p className={styles.questions}>
                        What would you like to focus on?
                    </p>
                    <div>
                        <input type="radio" value="back" name="focus" /> <output className={styles.answers}>Back pain</output>
                        <br/>
                        <input type="radio" value="stress" name="focus" /> <output className={styles.answers}>Stress reduction</output>
                        <br/>
                        <input type="radio" value="none" name="focus" /> <output className={styles.answers}>Surprise me!</output>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={styles["video-button"]}>
                        <h6>
                            Bring it on!
                        </h6>
                    </button>
                    </div>
                </form>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </main>
</>
        );
}

export default YogaQuestionnaire;