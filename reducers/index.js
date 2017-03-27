/**
 * Created by eleonora on 3/27/17.
 */

import { combineReducers } from 'redux';
import users from './users';
import compare from './compare';

export default combineReducers({
    users,
    compare
});