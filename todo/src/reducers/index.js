import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
    todos,
    visibilityFilter
});


console.log(todoApp);


export default todoApp