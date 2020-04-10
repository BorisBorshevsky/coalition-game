import {applyMiddleware, createStore, Dispatch, Middleware, MiddlewareAPI} from "redux";
import thunk from 'redux-thunk'
import appReducer from "./reducers";


const logger = () => {
    const loggerMiddleware: Middleware = ({getState}: MiddlewareAPI) => (
        next: Dispatch
    ) => action => {
        console.groupCollapsed(`dispatching action => ${action.type}`)
        console.log('will dispatch', action);

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action);

        console.log('state after dispatch', getState());
        console.groupEnd();
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    };

    return loggerMiddleware
};

export const storeFactory = (initialState = {}) => {
    return applyMiddleware(thunk, logger())(createStore)(appReducer, initialState)
}