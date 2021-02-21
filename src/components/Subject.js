import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import '../assets/style/subject.less'
import axios from 'axios'
import { connect } from 'react-redux'

class Subject extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         subject_data:[]
    //     }
    // }

    componentDidMount(){
        axios.get('/server/subject.json').then((res)=>{
            console.log(res.data);
            this.props.init_subject_data(res.data)
            // this.setState({
            //     subject_data:res.data
            // })
        })
    }

    render() {
        return (
            <div className='subject'>
                <Flex>
                    {
                        this.props.subject_data.map((v,k)=>{
                            if(k < 4){
                                return(
                                    <Flex.Item key={v.id}>
                                        <a href={"#/list/"+v.id}>
                                            <i style={{backgroundPositionX:-50*k}}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                            return ''
                        })
                    }
                    {/* <Flex.Item>
                        <a href="#/list">
                            <i></i>
                            <p>Java EE</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-50}}></i>
                            <p>全栈UI设计</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-100}}></i>
                            <p>H5前端</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-150}}></i>
                            <p>Python</p>
                        </a>
                    </Flex.Item> */}
                </Flex>
                <Flex>
                {
                        this.props.subject_data.map((v,k)=>{
                            if(k >= 4){
                                return(
                                    <Flex.Item key={v.id}>
                                        <a href={"#/list/"+v.id}>
                                            <i style={{backgroundPositionX:-50*k}}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                            return ''
                        })
                    }
                    {/* <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-200}}></i>
                            <p>iOS</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-250}}></i>
                            <p>大数据</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-300}}></i>
                            <p>C++</p>
                        </a>
                    </Flex.Item> */}
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        )
    }
}

// 使用仓库数据  把state换成props
const mapStateToProps = (state) => {
    return {
        subject_data: state.subject_data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        init_subject_data(res_data){
            //3、 调用dispatch(action)，将管理状态的方案传当做参数
            let action = {
                type:'init_subject_data',
                value:res_data
            }
            dispatch(action)  //这个函数一执行会调用到reducer
        }
    }
}
// connect(展示数据的函数,改变数据的函数)(组件类名)
export default  connect(mapStateToProps,mapDispatchToProps)(Subject)