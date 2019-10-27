import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from 'react-redux'

class App extends React.Component {

    nextItemId = 0

    addTodoList = (title) => {
        let newItem = {
            id: this.nextItemId,
            title,
            tasks: []
        }
        this.props.addTodoList(newItem)
        this.nextItemId++;
    }

    render = () => {
        const todoLists = this.props.todoLists.map(tdl => <TodoList id={tdl.id} title={tdl.title} tasks={tdl.tasks}/>)
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todoLists}
                </div>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todoLists: state.todoLists
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTodoList: (newTodoList) => {
            const action = {
                type: 'ADD_TODOLIST',
                newTodoList
            };
            dispatch(action);
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;

