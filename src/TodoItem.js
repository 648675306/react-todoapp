import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.taskComplete = this.taskComplete.bind(this);
        this.taskDelete   = this.taskDelete.bind(this);
    }

    render() {
        let isCompleted = this.props.status === 1;
        return (
            <li className={isCompleted?'complete':''}>
                <input type="checkbox" 
                    checked={isCompleted}
                    onChange={this.taskComplete}/>
                <span>{this.props.text}</span>
                <button className="btn-del" onClick={this.taskDelete}>删除</button>
            </li>
        );
    }

    taskComplete() {
        this.props.handleComplete(this.props.taskid);
    }

    taskDelete() {
        this.props.handleDelete(this.props.taskid);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text !== this.props.text || nextProps.status !== this.props.status) {
            return true;
        } else {
            return false;
        }
    }
}
 
export default TodoItem;