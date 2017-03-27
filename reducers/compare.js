/**
 * Created by eleonora on 3/27/17.
 */

import { ADD_TO_COMPARE } from '../constants/constants';

const initialState = {
    first: {},
    second: {}
}

export default function compare(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_COMPARE :
            return { ...state, compare: action.payload }
    }
    return state;
}