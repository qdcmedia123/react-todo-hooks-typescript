import { Action, ActionTypes } from '../action-types';
import { AuthUser } from '../actions';

const initialState = {email: null, password: null, isAuthenticated: false};

export const authReducer = (state:AuthUser = initialState, action:Action) => {
    switch(action.type) {
        case ActionTypes.authUser:
            return {...action.payload};
        default:
            return state;
    }
}