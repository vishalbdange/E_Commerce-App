import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
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
            <h1>Hello</h1>
        </BrowserRouter>
    )
}
export default App;