import React from 'react';
import { Switch, BrowserRouter, Route,useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './pages/Header/header';
import IndexPage from './pages/IndexPage/indexPage';
import DeptListPage from './pages/DeptListPage/deptListPage';
import CategoryListPage from './pages/CategoryListPage/categoryListPage';
import AboutPage from './pages/AboutPage/about';
import TeamPage from './pages/TeamPage/teamPage';
import NoMatch from './pages/NoMatchPage/noMatch'


const Router=({store})=>{
    return(
        <Provider store={store}>
        <BrowserRouter>
        <Switch/>
            <Route path="/:category/dept/:id" component={CategoryListPage}/>
            <Route path="/">
                <AnimationApp/>
           </Route>
        </BrowserRouter>
    </Provider>
    )
};

const AnimationApp=()=>{
    let location=useLocation()
    return(
        <div>
            <Header/>
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                classNames='fade'
                timeout={150}>
            <Switch location={location}>
                <Route exact path="/" component={IndexPage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/team" component={TeamPage}/>
                <Route path="/:category/dept" component={DeptListPage}/>
                <Route component={NoMatch}/>
            </Switch>
            </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Router;