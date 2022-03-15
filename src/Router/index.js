import React from 'react';
import Shop from '../Views/Shop';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
 
function Router(props) {
    return (
        <Switch>
        <Route path='/'>
                <Navbar>
                    <Shop />
                </Navbar>
        </Route>
        </Switch>
    );
}

export default Router;