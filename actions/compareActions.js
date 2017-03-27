/**
 * Created by eleonora on 3/27/17.
 */

import { ADD_TO_COMPARE } from '../constants/constants';

export function addToComp(first, second) {
    return {
        type: ADD_TO_COMPARE,
        payload: [ first, second ]
    }
}