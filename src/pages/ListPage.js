import React, { Component } from 'react'
import Header from '../components/Header'
import MyListView from '../components/MyListView'
import '../assets/style/ListPage.less'

export default class ListPage extends Component {

    componentDidMount(){
        // 根据从路由传过来的id值，向后端发起请求
        console.log(this.props.routeParams.subjectId);
    }

    render() {
        return (
            <div className='list-page'>
                {/* 头部组件 */}
                <Header />
                 {/* 长列表组件 */}
                <div className="sub-list">
                    <div className="sub-list-header">相关资讯</div>
                    <MyListView />
                </div>
                                
                
            </div>
        )
    }
}
