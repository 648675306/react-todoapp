// 引入 React, ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// 引入 TodoApp 组件
import TodoApp from './TodoApp';

// 将渲染结果挂在到 root 节点，该节点在 index.html 中
ReactDOM.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>,
    document.getElementById('root')
);