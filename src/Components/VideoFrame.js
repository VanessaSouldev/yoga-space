import React, {useContext, useEffect, useState} from 'react';
import './VideoFrame.module.css';
import {AuthContext} from "../Context/AuthContext";
import axios from "axios";


function VideoFrame({
                        endpoint,
                        widthAttribute,
                        heightAttribute,
                        classNameAttribute,
                        titleAttribute,
                        sourceValue,
                        fullScreenAttribute
                    }) {

    const {user} = useContext(AuthContext);
    const [videoResults, setVideoResults] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    let q = "";

    useEffect(() => {
        const controller = new AbortController();


        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            try {
                const {data} = await axios.get(endpoint, {
                    signal: controller.signal,
                });
                setVideoResults(data);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...');
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

        if (endpoint) {
            fetchData();
        }

        return () => {
            console.log('unmount effect is triggered');
            controller.abort();
        }

    }, []);


    return (


           <>

                    <iframe
                        width={widthAttribute}
                        height={heightAttribute}
                        className={classNameAttribute}
                        title={titleAttribute}
                        src={sourceValue}
                        allowFullScreen={fullScreenAttribute}>

                    </iframe>
               {loading && <p>Loading...</p>}
               {Object.keys(videoResults).length === 0 && error && <p>Something went wrong whilst loading the video's...</p>}

                </>



    )
}

export default VideoFrame;