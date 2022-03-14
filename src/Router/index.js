import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../Views/Components/Navbar';
import Home from '../Views/Home';
 
function Router(props) {
    return (
        <Switch>
        <Route path='/'>
                <Navbar>
                    <div className="py-4">
                    <Home />
                    </div>
                </Navbar>
        </Route>
        </Switch>
    );
}

export default Router;