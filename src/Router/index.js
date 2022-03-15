import React from 'react';
import Store from '../Views/Store';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
 
function Router(props) {
    return (
        <Switch>
        <Route path='/'>
                <Navbar>
                    <Store />
                </Navbar>
        </Route>
        </Switch>
    );
}

export default Router;