import React from "react";
import {Route, IndexRoute} from "react-router";
import App from './components/app';
import HomePage from './components/home-page';
import NotFoundPage from './components/not-found-page';
import Dashboard from './components/dashboard';
import Projects from './components/dashboard/projects';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/dashboard" component={Dashboard}>
            <Route path="/dashboard/projects" component={Projects}/>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
