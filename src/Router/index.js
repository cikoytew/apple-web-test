import React from 'react';
import Store from '../Views/Store';
import Mac from '../Views/product/Mac/Mac';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
import Footer from '../Views/Components/Footer';
import NotFound from '../Views/NotFound';
import Checkoutmac from '../Views/product/Mac/Checkoutmac';
import Iphone from '../Views/product/Iphone/Iphone';
import Checkoutiphone from '../Views/product/Iphone/Checkoutiphone';
import Checkoutipad from '../Views/product/Ipad/Checkoutipad';
import Ipad from '../Views/product/Ipad/Ipad';
import Bag from '../Views/Bag';

function Router(props) {
    return (
        <Switch>
            <Route exact={true} path='/'>
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
            <Route path='*/buy-iphone'>
                <Navbar>
                    <Iphone />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/iphone13-pro'>
                <Navbar>
                    <Checkoutiphone />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/buy-ipad'>
                <Navbar>
                    <Ipad />
                    <Footer />
                </Navbar>
            </Route>
            <Route path='*/ipad-pro'>
                <Navbar>
                    <Checkoutipad />
                    <Footer />
                </Navbar>
            </Route>

            <Route path='*/bag'>
                <Navbar>
                    <Bag />
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