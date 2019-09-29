//和vuex类似  创建存储器的方法  用来管理状态的(获取，修改)
import { createStore } from "redux";

//初始状态
let defaultState = {
    counter: 0
}


//redux的核心配置,中间处理器,记录状态的改变
function reducer(state = defaultState, action) {
    switch (action.type) {
        case "A": {
            let tempState = JSON.parse(JSON.stringify(state))
            //修改状态

            tempState.counter = tempState.counter + action.value;
            //返回状态
            return tempState;
        }
        case "B": {
            let tempState = JSON.parse(JSON.stringify(state))
            tempState.counter = tempState.counter - action.value;
            return tempState;
        }
        default:
            console.log("走default", action)
            return tempState;
    }
}

//创建存储器(需要状态配置信息的参数,如初始状态,修改状态的方法)
//调用创建的时候，reducer会默认执行一次，完成初始化
let store = createStore(reducer);

export default store;
//获取状态
console.log(store.getState());


//订阅
var n = 0;
let unSubscribe = store.subscribe(() => {
    n++;
    console.log("修改了", n)
})

unSubscribe(); //取消订阅



//修改状态
store.dispatch({ type: 'A', value: 10 })


/*
reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。


  特点:
1.整个应用的 state 被储存在一棵 object tree 中，
  并且这个 object tree 只存在于唯一一个 store 中
2.唯一改变 state 的方法就是触发 action，action
  是一个用于描述已发生事件的普通对象。
3.为了描述 action 如何改变 state tree ，你需要编写 reducers。


永远不要在 reducer 里做这些操作：

1.修改传入参数；
2.执行有副作用的操作，如 API 请求和路由跳转；
3.调用非纯函数，如 Date.now() 或 Math.random()。

 1. 如何浅拷贝 一个对象/数组 只拷贝最外层
    1.1 var 副本 = Object.assign(副本,{a:1},{b:2});
            副本 = {a:1,b:2}
    1.2 let 副本= {...obj1}
    1.3 自己写for in循环对象

 2. 如何深拷贝一个对象/数组 所有属性都拷贝一份
   2.1 var o2 = JSON.parse(JSON.stringfy(o1))
   2.2 自己写循环 递归


*/