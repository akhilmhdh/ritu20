import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from './pages/Header/header';
import IndexPage from './pages/IndexPage/indexPage';
import DeptListPage from './pages/DeptListPage/deptListPage';
import CategoryListPage from './pages/CategoryListPage/categoryListPage';
import AboutPage from './pages/AboutPage/about';


const NoMatch=()=>{
    return(<div>No Match</div>);
}

const Router=({store})=>{
    return(
        <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/:category/dept" component={DeptListPage}/>
                <Route path="/:category/dept/:id" component={CategoryListPage}/>
                <Route component={NoMatch}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    )
};

export default Router;