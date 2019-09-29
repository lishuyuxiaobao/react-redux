import { createStore } from "redux";

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
            let tempState = JSON.parse(JSON.stringify(state))
            console.log("走default", action)
            return tempState;
    }
}


let store = createStore(reducer);

export default store;
