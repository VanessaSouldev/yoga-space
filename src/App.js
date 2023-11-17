import React, {useContext} from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import WelcomePageAndQuestionnaire from './Pages/Questionnaire/WelcomePageAndQuestionnaire';
import SignIn from './Pages/Signin/SignIn';
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SignUp from './Pages/Signup/SignUp';
import VideoPage from './Pages/Videopage/VideoPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navigate from "./Components/Navigation/NavBar/Navigate";

import {AuthContext} from "./Context/AuthContext";


function App() {


    const {isAuth} = useContext(AuthContext);

    return (<span>
<Navigate/>

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
            <Route path="/profile">
                {isAuth ? <ProfilePage/> : <Redirect to='/'/>}
            </Route>
            <Route path="/welcomepage">
                 <WelcomePageAndQuestionnaire/>
            </Route>
            <Route path="/videopage">
                <VideoPage/>
            </Route>
        </Switch>

        </span>);
}

export default App;
