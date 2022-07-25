import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import VideoPage from './Pages/VideoPage';
import { Switch, Route } from 'react-router-dom';


function App() {

    return (

                 <div className='App-angled-gradient'>
                 <div className='macbook-pro'>


                     <Switch>
                     <Route exact path="/">
                         <Homepage />
                     </Route>
                     <Route path="/signup">
                         <SignUp />
                     </Route>
                     <Route path="/signin">
                         <SignIn />
                     </Route>
                     <Route path="/profile">
                         <Profile />
                     </Route>
                     <Route path="/videopage">
                         <VideoPage />
                     </Route>
                 </Switch>

                 </div>
                 </div>
             );
        }

export default App;
