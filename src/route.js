import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import IndexPage from './pages/IndexPage/indexPage';
import Header from './pages/Header/header'


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
                <Route component={NoMatch}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    )
};

export default Router;