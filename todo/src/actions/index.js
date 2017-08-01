let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id) => {
    console.log('TOGGLE_TODO');
    
    return {
        type: 'TOGGLE_TODO',
        id
    }
};