import React from 'react';
import CitiesComponent from '../cities/cities'
import CitiesSearchComponent from '../citiesSearch/citiesSearch';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Component404 from '../404/404';

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <Switch>
                {/* 根路径  模糊匹配 
                    exact 是严谨匹配  必须和路径path完全一致
                    */}
                <Route exact path="/" component={CitiesComponent} />
                <Route exact path="/city/:id/:name" component={CitiesSearchComponent} />
                <Redirect from='/home' to='/' />
                <Route component={Component404} />
            </Switch>
        </BrowserRouter>
    )

}