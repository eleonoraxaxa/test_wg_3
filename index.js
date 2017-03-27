/**
 * Created by eleonora on 3/26/17.
 */

'use strict';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import App from './containers/App';
import List from './containers/List';
import Compare from './containers/Compare';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/list' component={List}>
                    </Route>

                    <Route path='/compare' component={Compare}>
                    </Route>
                </Switch>

            </App>
        </Router>
    </Provider>,
    document.getElementById('react-root')
);
