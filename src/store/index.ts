import {applyMiddleware, createStore, Dispatch, Middleware, MiddlewareAPI,} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import appReducer, {defaultState} from "./reducers";
import {StateShape} from "./state";
import {gameAction} from "./actions";
import {composeWithDevTools} from "redux-devtools-extension";


const logger = () => {
  const loggerMiddleware: Middleware = ({getState}: MiddlewareAPI) => (
    next: Dispatch
  ) => (action) => {
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());
    console.groupEnd();
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };

  return loggerMiddleware;
};


export const storeFactory = (initialState = defaultState) => {

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  return createStore(appReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, logger()),
    // other store enhancers if any
  ));


  // return applyMiddleware(thunk, logger())(createStore)(
  //   appReducer,
  //   initialState
  // );
};

export type ReduxThunk<ReturnType = void> = ThunkAction<ReturnType,
  StateShape,
  unknown,
  gameAction>