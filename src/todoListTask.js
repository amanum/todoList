import React from 'react';

class TodoListTask extends React.Component {
	state = {
		editMode: false
	}
	onIsDoneChanged = (e) => {
		this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
	}
	onTitleChanged = (e) => {
		this.props.changeTitle(this.props.task.id, e.currentTarget.value);
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}
	render = () => {
		const taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task"
		return (
				  <div className={taskClass}>
					  <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
					  {this.state.editMode
								 ? <input onChange={this.onTitleChanged} onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.task.title}/>
								 : <span onClick={this.activateEditMode}>{`${this.props.task.id} - ${this.props.task.title}`}</span>
					  }, priority: {this.props.task.priority}
				  </div>
		);
	}
}

export default TodoListTask;

