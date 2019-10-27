import React from 'react';
import TodoListTask from "./todoListTask";

class TodoListTasks extends React.Component {
	render = () => {
		return (
				  <div className="todoList-tasks">
					  {this.props.tasks.map(task => <TodoListTask task={task} changeStatus={this.props.changeStatus} changeTitle={this.props.changeTitle}/>)}
				  </div>
		);
	}
}

export default TodoListTasks;

