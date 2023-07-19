import React, {useContext} from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import WelcomePageAndQuestionnaire from './Pages/Questionnaire/WelcomePageAndQuestionnaire';
import SignIn from './Pages/Signin/SignIn';
import SignUp from './Pages/Signup/SignUp';
import VideoPage from './Pages/Videopage/VideoPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import {AuthContext} from "./Context/AuthContext";


function App() {

    const {isAuth} = useContext(AuthContext);

    return (
        <span id='outer-content-container'>
        {/*<div className={"MacBook-Pro-14"}>*/}



        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/signin">
                <SignIn/>
            </Route>
            <Route path="/welcomepage">
                 {isAuth ? <WelcomePageAndQuestionnaire/> : <Redirect to='/'/>}
            </Route>
            <Route path="/videopage">
                <VideoPage/>
            </Route>
        </Switch>


                 {/*</div>*/}
        </span>
             );
        }

export default App;
