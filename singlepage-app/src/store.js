import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import * as Employee from './reducers/Employee'

const reducers = {
    employee: Employee.reducer,
}
const rootReducer = combineReducers({
    ...reducers
});

const middleware = [thunk]

export default createStore(rootReducer, applyMiddleware(...middleware))


