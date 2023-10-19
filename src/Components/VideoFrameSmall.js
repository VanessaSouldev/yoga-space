// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import './VideoFrameSmall.css'
//
//
// function VideoFrameSmall({
//                         endpoint,
//                         widthAttribute,
//                         PositionAttribute,
//                         heightAttribute,
//                         titleAttribute,
//                         sourceValue,
//                         fullScreenAttribute
//                     }) {
//
//
//     const [videoResults, setVideoResults] = useState([]);
//     const [loading, toggleLoading] = useState(false);
//     const [error, toggleError] = useState(false);
//
//
//     useEffect(() => {
//         const controller = new AbortController();
//
//
//         async function fetchData() {
//             toggleLoading(true);
//             toggleError(false);
//
//             try {
//                 const {data} = await axios.get(endpoint, {
//                     signal: controller.signal,
//                 });
//                 setVideoResults(data);
//             } catch (e) {
//                 if (axios.isCancel(e)) {
//                     console.error('Request is canceled...');
//                 } else {
//                     console.error(e);
//                     toggleError(true);
//                 }
//             } finally {
//                 toggleLoading(false);
//             }
//         }
//
//         if (endpoint) {
//             fetchData();
//         }
//
//         return () => {
//             console.log('unmount effect is triggered');
//             controller.abort();
//         }
//
//     }, []);
//
//
//     return (
//
//
//            <>
//
//                     <iframe
//                         width={widthAttribute}
//                         height={heightAttribute}
//                         className="video-small"
//                         title={titleAttribute}
//                         src={sourceValue}
//                         allowFullScreen={fullScreenAttribute}>
//
//                     </iframe>
//                {loading && <p>Loading...</p>}
//                {Object.keys(videoResults).length === 0 && error && <p>Something went wrong whilst loading the video's...</p>}
//
//                 </>
//
//
//
//     )
// }
//
// export default VideoFrameSmall;