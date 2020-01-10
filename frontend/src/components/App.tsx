import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FoodList } from './FoodList';
import { CreateFood } from './CreateFood';
import { Footer } from './Footer';

export const App: FunctionComponent = () => {
    return (
        <>
            <Router>
                <div className="nav-container">
                    <h1 className="title">food mood</h1>
                    <Route path="/" exact component={FoodList} />
                    <Route path="/create" component={CreateFood} />
                </div>
            </Router>
            <FoodList></FoodList>
            <Footer />
        </>
    );
};
