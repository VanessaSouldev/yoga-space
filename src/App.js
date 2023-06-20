import React, {useContext} from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import YogaQuestionnaire from './Pages/YogaQuestionnaire';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import VideoPage from './Pages/VideoPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import {AuthContext} from "./Context/AuthContext";


function App() {

    const {isAuth} = useContext(AuthContext);

    return (
                 <div id={"MacBook-Pro-14"}>
        <body id='outer-content-container'>


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
                {isAuth ? <profile/> : <Redirect to='/'/>}
            </Route>
            <Route path="/yogaquestionnaire">
                <YogaQuestionnaire/>
            </Route>
            <Route path="/videopage">
                <VideoPage/>
            </Route>
        </Switch>
                     </body>

                 </div>
             );
        }

export default App;
