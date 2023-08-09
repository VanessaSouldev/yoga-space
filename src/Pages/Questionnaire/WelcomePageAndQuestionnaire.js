// import React, { useState } from 'react'
// import { Layout, Button, List } from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
//
// const config = {
//     apiUrl: 'https://type.fit/api/quotes',
//     repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
// }
//
// const { Header, Content } = Layout
//
// function WelcomePageAndQuestionnaire() {
//     const [quotes, setQuotes] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const Quote = ({ text, author }) => {
//         return (
//             <span>
//         <strong>{text}</strong> &nbsp; <span>{author}</span>
//       </span>
//         )
//     }
//
//     const getQuotes = () => {
//         setQuotes([])
//         setIsLoading(true)
//         fetch(config.apiUrl)
//             .then(function (response) {
//                 return response.json()
//             })
//             .then((data) => {
//                 setQuotes(data)
//                 setIsLoading(false)
//             })
//             .catch(() => {
//                 setIsLoading(false)
//             })
//     }
//     return (
//         <Layout>
//             <Header>
//                 <div className="container">
//                     <span className="site-logo">Inspirational Quotes</span>
//                 </div>
//             </Header>
//             <Content className="container">
//                 <List
//                     size="small"
//                     loading={isLoading}
//                     header={
//                         <Button
//                             onClick={() => getQuotes()}
//                             type="primary"
//                             icon={<DownloadOutlined />}
//                             disabled={isLoading}
//                             size="large">
//                             Fetch Quotes
//                         </Button>
//                     }
//                     footer={<a href={config.repoUrl}>Fork on Github</a>}
//                     bordered
//                     dataSource={quotes}
//                     renderItem={(quote) => (
//                         <List.Item>
//                             <Quote text={quote.text} author={quote.author} />
//                         </List.Item>
//                     )}
//                 />
//             </Content>
//         </Layout>
//     )
// }
//
//

import styles from './WelcomePageandYogaQuestionnaire.module.css';
import React, {useContext, useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from "../../Context/AuthContext";
import waters from '../../Components/assets/images/lilac-waters.jpg';
import AnswersInput from "../../Components/AnswersInput";
import axios from "axios";


function WelcomePageAndQuestionnaire() {

    const {user} = useContext(AuthContext);
    const history = useHistory();
    const [time, setTime] = useState('');
    const [intensity, setIntensity] = useState('');
    const [focus, setFocus] = useState('');

    // const quotes = ({ q, a }) => {
    //
    //
    // async function getQuote() {
    //     try {
    //         const response = await axios.get(`https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value`,)
    //         { const response = await fetch(getQuote());
    //             var data = await response.json();
    //             console.log(data);
    //         }
    //
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // }
    //



    async function handleSubmit(e) {
        e.preventDefault(e)

        try {
            history.push("/videopage");


        } catch (e) {
            console.error(e)

        }}
        useEffect(() => {
            user.time = time;
            user.intensity = intensity;
            user.focus = focus;

        }, [time, intensity, focus]);

        return (
            <>
                <div className={styles["rectangle-container"]}>
                    <img className={styles.rectangle} src={waters} alt="lilac waters"/>
                    <h4 className={styles.header}>
                        Welcome Back {user.username}
      {/*                  <span>*/}
      {/*  <strong>{quotes(q)}</strong> &nbsp; <span>{quotes(a)}</span>*/}
      {/*</span>)*/}
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles["questions-container"]}>
                        <p className={styles.questions}>
                            How much time do you have today?
                        </p>
                        <div>
                            <AnswersInput
                                type="radio"
                                idAttribute="time"
                                nameAttribute="time"
                                stateValue={'time'}
                                stateSetter={() => setTime('short')}
                                className={styles.answers}
                                labelText= "less than 5 minutes"/>
                            <br/>
                            <AnswersInput
                                type="radio"
                                idAttribute="time"
                                nameAttribute="time"
                                stateValue={'time'}
                                stateSetter={() => setTime('medium')}
                                className={styles.answers}
                                labelText= "5 - 20 minutes"/>
                            <br/>
                            <AnswersInput
                                type="radio"
                                idAttribute="time"
                                nameAttribute="time"
                                stateValue={'time'}
                                stateSetter={() => setTime('long')}
                                className={styles.answers}
                                labelText= "20 minutes or more"/>
                            <br/>

                        </div>
                        <p className={styles.questions}>
                            What kind of yoga are you up for?
                        </p>
                        <div>
                            <AnswersInput
                                type="radio"
                                idAttribute="intensity"
                                nameAttribute="intensity"
                                stateValue={'intensity'}
                                stateSetter={() => setIntensity('beginner')}
                                className={styles.answers}
                                labelText= "Beginner"/>
                            <br/>
                            <AnswersInput
                            type="radio"
                            idAttribute="intensity"
                            nameAttribute="intensity"
                            stateValue={'intensity'}
                            stateSetter={() => setIntensity('yin')}
                            className={styles.answers}
                            labelText= "Yin yoga (relaxing)"/>
                            <br/>
                            <AnswersInput
                                type="radio"
                                idAttribute="intensity"
                                nameAttribute="intensity"
                                stateValue={'intensity'}
                                stateSetter={() => setIntensity('advanced')}
                                className={styles.answers}
                                labelText= "Advanced"/>
                        </div>
                        <p className={styles.questions}>
                            What would you like to focus on?
                        </p>
                        <div>
                            <AnswersInput
                                type="radio"
                                idAttribute="focus"
                                nameAttribute="focus"
                                stateValue={'focus'}
                                stateSetter={() => setFocus('backpain')}
                                className={styles.answers}
                                labelText= "Back pain"/>
                            <br/>
                            <AnswersInput
                                type="radio"
                                idAttribute="focus"
                                nameAttribute="focus"
                                stateValue={'focus'}
                                stateSetter={() => setFocus('stress')}
                                className={styles.answers}
                                labelText= "Stress relief"/>
                            <br/>
                            <AnswersInput
                                type="radio"
                                idAttribute="focus"
                                nameAttribute="focus"
                                stateValue={'focus'}
                                stateSetter={() => setFocus('depression' && 'positvity')}
                                className={styles.answers}
                                labelText= "Depression / Yoga to feel to uplift"/>
                        </div>
                        <button
                            type="submit"
                            className={styles["video-button"]}>
                            Bring it on!
                        </button>
                    </div>
                </form>
                <p className={styles["account-link"]}>Tor return to the Homepage click  <Link to="/">here</Link>.</p>
                </>
        );
    }
export default WelcomePageAndQuestionnaire;