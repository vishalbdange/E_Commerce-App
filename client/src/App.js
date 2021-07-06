import React,{useEffect} from 'react'
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./components/Home/Home"
import SignUp from "./components/Auth/SignUp/SignUp"
import SignIn from "./components/Auth/SignIn/SignIn"
import AdminRoute from "./components/AdminDashboard/AdminRoute.js"
import UserRoute from "./components/UserDashboard/UserRoute.js"
import UserDashboard from "./components/UserDashboard/UserDashboard.js"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.js"
import AdminEditProduct from "./components/AdminEditProduct/AdminEditProduct.js"
import NotFound from "./components/NotFound"
import { useDispatch } from "react-redux"
import {getCategories} from "./redux/actions/categoryActions"
import {getProducts} from "./redux/actions/productActions"
import AllProducts from './components/AllProducts/AllProducts';
const App = ()=> {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    useEffect(() => {
        dispatch(getProducts());
       }, [])

    return (    
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <UserRoute exact path="/user/dashboard" component={UserDashboard}/>
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                <AdminRoute exact path="/admin/edit/product/:productId" component={AdminEditProduct}/>
                <AdminRoute exact path="/allproducts" component={AllProducts}/>
                <Route  component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;