import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProducts from "./admin/AddProduct";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/signin' exact component={Signin}/>
                <PrivateRoutes path='/user/dashboard' exact component={UserDashBoard}/>
                <AdminRoutes path='/admin/dashboard' exact component={AdminDashboard}/>
                <AdminRoutes path='/admin/create/category' exact component={AddCategory}/>
                <AdminRoutes path='/admin/categories' exact component={ManageCategories}/>
                <AdminRoutes path='/admin/create/product' exact component={AddProducts}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
