import React from 'react';
import Store from '../Views/Store';
import Mac from '../Views/Mac';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
import Footer from '../Views/Components/Footer';

function Router(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Store />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='/shop/buy-mac'>
                <Navbar>
                    <Mac />
                    <Footer />
                </Navbar>
            </Route>
        </Switch>
    );
}

export default Router;