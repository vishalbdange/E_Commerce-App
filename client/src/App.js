import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./components/Home/Home"
import SignUp from "./components/Auth/SignUp/SignUp"
import SignIn from "./components/Auth/SignIn/SignIn"
import NotFound from "./components/NotFound"
const App = ()=>{
    return (    
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route  component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;