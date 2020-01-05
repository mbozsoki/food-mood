import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FoodList } from './FoodList';
import { CreateFood } from './CreateFood';
import { Footer } from './Footer';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const App: FunctionComponent<HelloProps> = ({ compiler, framework }) => {
    return (
        <>
            <Router>
                <div className="nav-container">
                    <h1 className="title">food mood</h1>
                    <Route path="/" exact component={FoodList} />
                    <Route path="/create" component={CreateFood} />
                </div>
            </Router>
            <Footer />
        </>
    );
};
