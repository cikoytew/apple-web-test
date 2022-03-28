import React from 'react';
import Store from '../Views/Store';
import Mac from '../Views/product/Mac/Mac';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
import Footer from '../Views/Components/Footer';
import NotFound from '../Views/NotFound';
import Checkoutmac from '../Views/product/Mac/Checkoutmac';

function Router(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Store />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/store'>
                <Navbar>
                    <Store />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/buy-mac'>
                <Navbar>
                    <Mac />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/macbook-air'>
                <Navbar>
                    <Checkoutmac />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*'>
                <Navbar>
                    <NotFound />
                </Navbar>
            </Route>
        </Switch>
    );
}

export default Router;