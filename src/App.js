import React, { useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import io from "socket.io-client"
import { ChatroomPage } from './Components/Pages/ChatroomPage';
import { DashboardPage } from './Components/Pages/DashboardPage';
import { HomePage } from './Components/Pages/HomePage';
import { LoginPage } from './Components/Pages/LoginPage';
import { RegisterPage } from './Components/Pages/RegisterPage';


let socket;
function App() {
  useEffect(()=>{
    socket= io.connect("http://localhost:4000")

},[])
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/dashboard">
          <DashboardPage/>
        </Route>
        <Route path="/chatroom/:id">
          <ChatroomPage/>
        </Route>
       </Switch>

     </Router>
    </div>
  );
}

export default App;
