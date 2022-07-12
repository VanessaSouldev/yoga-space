import "./Videopage.css"
import waters from "../Images/lilac-waters.jpeg";



function Videopage() {

return (
    <main>
        <section>
            <img className="video-rectangle" src={waters} alt="lilac waters"/>
            <div className="video-rectangle-container">
                <h10>
                    Here's your selection of yoga-sessions for you to choose from today
                </h10>
            </div>
        </section>
    </main>


    );
}

export default Videopage;