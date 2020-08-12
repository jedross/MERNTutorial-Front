import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUp from './User/Signup';
import Signin from './User/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './User/UserDashboard';
import AdminDashboard from './User/AdminDashboard';
import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';
import Orders from './Admin/orders';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Profile from './User/Profile';
import ManageProducts from './Admin/ManageProducts';
import UpdateProduct from './Admin/UpdateProduct'


const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>    
            <Route path="/Shop" exact component={Shop}/>
            <Route path="/Signin" exact component={Signin}/>
            <Route path="/Signup" exact component={SignUp}/>
            <PrivateRoute path="/Dashboard" exact component={Dashboard}/>
            <AdminRoute path="/admin/Dashboard" exact component={AdminDashboard}/>
            <AdminRoute path="/admin/Create/Category" exact component={AddCategory}/>
            <AdminRoute path="/admin/Create/Products" exact component={AddProduct}/>
            <AdminRoute path="/admin/orders" exact component={Orders}/>
            <Route path="/product/:productId" exact component={Product}/>
            <Route path="/Cart" exact component={Cart}/>
            <PrivateRoute path="/Profile/:userId" exact component={Profile}/>
            <AdminRoute path="/admin/products" exact component={ManageProducts}/>
            <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes; 