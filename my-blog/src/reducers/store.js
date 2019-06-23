import ContentReducer from './ContentReducer/ContentReducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import ThemeReducer from "./ThemeReducer/ThemeReducer";

//Reducer combiner
const rootReducer = combineReducers({
    ContentReducer: ContentReducer,
    ThemeReducer: ThemeReducer
});

//Redux devtools enabler/injector
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux store declaration
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;