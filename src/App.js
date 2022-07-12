import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Videopage from './Pages/Videopage';
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
                         <Signup />
                     </Route>
                     <Route path="/signin">
                         <Signin />
                     </Route>
                     <Route Path="/profile">
                         <Profile />
                     </Route>
                     <Route path="/videopage">
                         <Videopage />
                     </Route>
                 </Switch>
                 </div>
                 </div>
  );
}

export default App;
