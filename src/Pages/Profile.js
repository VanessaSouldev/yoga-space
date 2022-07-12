import './Profile.css';
import waters from '../Images/lilac-waters.jpeg';
import { useHistory } from "react-router-dom";


function Profile() {

    const history = useHistory();

    function handleClickVideos() {
        history.push("/videopage");
    }
    return (
        <main>
            <section>
                <img className="rectangle" src={waters} alt="lilac waters"/>
                <div className="rectangle-container">
                <h7>
                    Welcome Back Vanessa! Ready for your daily yoga moment?!
                </h7>
            </div>
            </section>
            <div className="questions">
                <form>
                    <h8>
                        How much time do you have today?
                    </h8>
                    <div>
                        <input type="radio" value="10-20" name="time" /> <h9>10 - 20 minutes</h9>
                        <br/>
                        <input type="radio" value="20-30" name="time" /> <h9>20 - 30 minutes</h9>
                        <br/>
                        <input type="radio" value="30 or more" name="time" /> <h9> 30 minutes or more</h9>
                    </div>
                    <h8>
                        What kind of yoga are you up for?
                    </h8>
                    <div>
                        <input type="radio" value="Beginners" name="intensity-level" /> <h9>Beginners</h9>
                        <br/>
                        <input type="radio" value="Yin" name="intensity-level" /> <h9>Relaxing(yin yoga)</h9>
                        <br/>
                        <input type="radio" value="Intense" name="intensity-level" /> <h9>Intense I'm fired up!</h9>
                    </div>
                    <h8>
                        Are there any areas you would like to focus on?
                    </h8>
                    <div>
                        <input type="radio" value="back" name="focus" /> <h9>back pain</h9>
                        <br/>
                        <input type="radio" value="stress" name="focus" /> <h9>stress reduction</h9>
                        <br/>
                        <input type="radio" value="none" name="focus" /> <h9>surprise me!</h9>
                    </div>
                    <button
                        type="submit"
                        onClick={handleClickVideos}
                        className="video-button">
                        <h6>
                            Bring it on!
                        </h6>
                    </button>
                </form>
            </div>
        </main>
        );
}

export default Profile;