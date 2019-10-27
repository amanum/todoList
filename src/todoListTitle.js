import React from 'react';

class TodoListTitle extends React.Component {
    state = {
        error: true,
        title: ""
    }
    onAddTaskClick = () => {
        let newText = this.state.title;
        if (newText !== "") {
            this.props.addTask(newText);
        }
        this.setState({
            title: ""
        })
    }
    onInputChange = (e) => {
        let newText = e.currentTarget.value;
        if (newText === "") {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
        }
        this.setState({
            title: newText
        })
    }
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    }
    render = () => {
        return (
            <h3 className="todoList-header__title">{this.props.title}</h3>
        );
    }
}

export default TodoListTitle;

