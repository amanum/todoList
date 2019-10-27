import {createStore} from 'redux'

const initialState ={
    todoLists: [],
    filterValue: 'All'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOLIST': {
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList]
            }
        }
        case 'ADD_TASK': {
            return {
                ...state,
                todoLists: state.todoLists.map(todoList => {
                    if (todoList.id === action.todoListId) {
                        return {...todoList, tasks: [...todoList.tasks, action.newTask]}
                    } else {
                        return todoList
                    }
                })
            }
        }
        case 'CHANGE_FILTER': {
            return {
                ...state,
                filterValue: action.newFilterValue
            }
        }
        case 'CHANGE_TASK': {
            return {
                ...state,
                todoLists: state.todoLists.map(todoList => {
                    if (todoList.id === action.todoListId) {
                        return {
                            ...todoList,
                            tasks: todoList.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return {...task, ...action.obj}
                                } else {
                                    return task;
                                }
                            })
                        }
                    }
                    return todoList
                })
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;