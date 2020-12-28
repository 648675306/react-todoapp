import React, { Component } from 'react';
import TodoList from './TodoList';
import './app.css';

class TodoApp extends Component {
    constructor(props) { // 构造方法，props 应该是父类的一个成员变量
        super(props);
        this.state = { // 组件状态数据
            text: '',
            items:[{id: 1, status: 1, text: "去月球"},{id: 2, status: 0, text: "去火星"}]
        };

        // 设置 this 指向，默认 undefined
        this.handleChange   = this.handleChange.bind(this);
        this.handleAdd      = this.handleAdd.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete   = this.handleDelete.bind(this);
    }
    // 渲染解析 jsx
    render() {
        return (
            <div className="todo">
                <h3 className="text-center">Todos App</h3>
                <TodoList 
                    items={this.state.items} 
                    handleComplete={this.handleComplete} 
                    handleDelete={this.handleDelete} />

                <input className="input" type="text" placeholder="添加新任务" 
                    value={this.state.text} 
                    onChange={this.handleChange} />

                <button className="btn-add" onClick={this.handleAdd}>添加</button>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleAdd(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            id: Date.now(),
            text: this.state.text,
            status: 0
        };

        this.setState({
            items: [...this.state.items, newItem],
            text: ''
        });
    }

    handleComplete(taskid) {
        // 临时变量，不直接修改原数据
        let items = this.state.items;
        let findItem = items.find(item => item.id === taskid);
        findItem.status = findItem.status === 0 ? 1 : 0;

        this.setState({
            items: items
        });
    }
    
    handleDelete(taskid) {
        let items = this.state.items;
        items = items.filter(item => item.id !== taskid);
        this.setState({
            items: items
        });
    }
}
 
export default TodoApp;