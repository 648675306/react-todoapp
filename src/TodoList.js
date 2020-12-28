import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <ul className="list">
                {
                    this.props.items.map((item)=>{
                        return (
                            <TodoItem key={item.id} 
                                taskid={item.id}
                                status = {item.status}
                                text={item.text} 
                                handleComplete={this.props.handleComplete} 
                                handleDelete={this.props.handleDelete} />
                        )
                    })
                }
            </ul>
        );
    }
}
 
export default TodoList;