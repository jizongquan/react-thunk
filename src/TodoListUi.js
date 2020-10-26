// import React,{ Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

//无状态组件,当一个函数只有render的时候没有过多逻辑，可以直接用无状态组件来替换，更简洁
const TodoListUI = (props)=>{
    return(
        <div style={{paddingTop:"30px",paddingLeft:"30px"}}>
            <div style={{marginBottom:"20px"}}>
                <Input
                    value = {props.inputValue}
                    placeholder="todo info"
                    style={{width:'300px',marginRight:"10px"}}
                    onChange={props.handeleInputChange}
                />
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>
            </div>
            <List
                style = {{width:"300px"}}
                bordered
                dataSource={props.list}
                renderItem={
                    (item,index) => {
                        return(
                            <List.Item
                                onClick={()=>{props.handleItemDelete(index)}}
                                >
                                    {item}
                                </List.Item>
                            )
                        }
                    }
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render(){
//         return(
//                  <div style={{paddingTop:"30px",paddingLeft:"30px"}}>
//                     <div style={{marginBottom:"20px"}}>
//                         <Input
//                         value = {this.props.inputValue}
//                         placeholder="todo info"
//                         style={{width:'300px',marginRight:"10px"}}
//                         onChange={this.props.handeleInputChange}
//                         />
//                         <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//                     </div>
//                     <List
//                         style = {{width:"300px"}}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={
//                             (item,index) => {
//                                 return(
//                                     <List.Item
//                                     onClick={()=>{this.props.handleItemDelete(index)}}
//                                     >
//                                         {item}
//                                    </List.Item>
//                                 )
                                    
//                             }
//                         }
//                     />
//                 </div>
//         )
//     }
// }

export default TodoListUI;