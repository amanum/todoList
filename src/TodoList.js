import React from 'react';
import './App.css';
import TodoListTasks from "./todoListTasks";
import TodoListFooter from "./todoListFooter";
import TodoListTitle from "./todoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";

class TodoList extends React.Component {

    constructor(props) {

        super(props)
    }

    state = {
        tasks: [],
        filterValue: "All"
    };

    nextTaskId = 0

    addItem = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        }
        this.nextTaskId++;
        this.props.addTask(this.props.id, newTask)
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeTask = (taskId, obj) => {
        this.props.changeTask(this.props.id, taskId, obj)
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, taskTitle) => {
        this.changeTask(taskId, {title: taskTitle})
    }

    render = () => {
        return (
            <div className="todoList">
                <div className="todolistHeader">
                    <TodoListTitle title={this.props.title}/>
                    <AddNewItemForm addItem={this.addItem}/>
                </div>
                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               tasks={this.props.tasks.filter(t => {
                                   return this.state.filterValue === "All" ? true :
                                       this.state.filterValue === "Active" ? !t.isDone : t.isDone
                               })}/>
                <TodoListFooter filterValue={this.state.filterValue}
                                changeFilter={this.changeFilter}
                />
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todoListId, newTask) => {
            const action = {
                type: 'ADD_TASK',
                todoListId,
                newTask
            }
            dispatch(action)
        },
        changeFilter: (todoListId, newFilterValue) => {
            const action = {
                type: 'CHANGE_FILTER',
                todoListId,
                newFilterValue
            }
            dispatch(action)
        },
        changeTask: (todoListId, taskId, obj) => {
            const action = {
                type: 'CHANGE_TASK',
                todoListId,
                taskId,
                obj
            }
            dispatch(action)
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList)

export default ConnectedTodoList;

