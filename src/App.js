import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import React,{useState,useEffect } from 'react';
import { Route,Switch } from "react-router-dom";
import Chat from './Components/Chat'
import Nav from './Components/Nav';

function App() {
  const [isLoggedIn,setisLoggedIN] = useState(true)
  const token = localStorage.getItem('access_token')
  console.log(token,'token')
  useEffect(() => {
    if (token){
      setisLoggedIN(false)
    }
  }, [token])

  return (
    <div className="App">
          <Switch>
          <Route exact path="/"> 
            {isLoggedIn?<Login></Login>:<Home cond={isLoggedIn}></Home>}
          </Route>
          <Route path="/chat/:roomName">
             <Chat></Chat>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
