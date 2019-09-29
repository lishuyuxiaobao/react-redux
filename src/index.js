//引用核心文件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./assets/css/reset.css";
import "./assets/js/resize.js";
import "antd-mobile/dist/antd-mobile.css";
import "./https/index";
import "./store/index";
import store from "./store";

//为了全局共享  加到顶端的原型上  实现共享
Component.prototype.store = store;

ReactDOM.render(<App />, document.getElementById('root'));

