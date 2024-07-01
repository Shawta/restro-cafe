import { 
    legacy_createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {thunk} from 'redux-thunk';


import {ItemsReducer} from '../items/reducers';
import {CartsReducer} from '../carts/reducers';

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            items: ItemsReducer,
            carts: CartsReducer,
       }),
       compose(
        applyMiddleware(

            thunk
        ),
        // DEBUG MODE
        // Download if you want to use : Redux DevTools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}