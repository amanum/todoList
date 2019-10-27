import React from 'react';

class AddNewItemForm extends React.Component {
    state = {
        error: true,
        title: ""
    }
    onAddItemClick = () => {
        let newText = this.state.title;
        if (newText !== "") {
            this.props.addItem(newText);
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
            this.onAddItemClick()
        }
    }
    render = () => {
        return (
            <div className="todoList-newItemForm">
                <input className={this.state.error && "error"}
                       onChange={this.onInputChange}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                       type="text"
                       placeholder="New item name"/>
                <button onClick={this.onAddItemClick}>Add</button>
            </div>
        );
    }
}

export default AddNewItemForm;

