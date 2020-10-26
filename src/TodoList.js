import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import TodoListUI from './TodoListUi'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getTodoList
} from './store/actionCreator';
// import {
//     CHANGE_INPUT_VALUE,
//     ADD_TODO_ITEM,
//     DELETE_TODO_ITEM
// } from './store/actionTypes'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        //订阅store 只要改变这里可以定义函数，只要变就会执行
        store.subscribe(this.handleStoreChange)
    }
    handeleInputChange = (e)=>{
        //创建action 然后给到store
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange=()=>{
        //重新调用store里面的数据，于当前页面保持同步
        this.setState(store.getState())
    }
    handleBtnClick = ()=>{
        // const action = {
        //     type:ADD_TODO_ITEM,
        // };
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete = (index)=>{
        console.log(index)
        const action = getDeleteItemAction(index)
        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        store.dispatch(action)
    }


    render() {
        return(
            <TodoListUI
            inputValue ={this.state.inputValue}
            list ={this.state.list}
            handeleInputChange={this.handeleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
            />
        )    
    }
    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action)
    }
}

export default TodoList;

