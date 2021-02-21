import React, { Component } from "react";
import {NavBar,SearchBar,Icon} from 'antd-mobile'
import Img from '../components/Img'
import '../assets/style/Header.less'

// 属性名 isFooter     类型：布尔值     为true表示为页面的尾部
// 属性名 isDetail     类型：布尔值     为true表示为详情页
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <NavBar
            leftContent={this.props.isDetail ? '' :[
                this.props.isFooter ? '': <Img key='0' src='logo.png' height={30}  />
              ]}
              icon={this.props.isDetail ? <Icon type='left' /> : ''}
              // onLeftClick={() => console.log('onLeftClick')}

        >
          {
            this.props.isDetail ? 
            <Img src='logo.png' height={30}  /> 
            : this.props.isFooter ? 
            <div style={{width:'100%',textAlign:'right'}}><Img src='logo.png' height={30}  /></div> 
            : <SearchBar placeholder="搜索" maxLength={8} />}
        </NavBar> */}

        {
          this.props.isDetail ? 
          <NavBar
                icon={<Icon type='left' />}
                // 返回上一页
                onLeftClick={() => window.history.go(-1)}
          >
            { <a href="#/home"><Img src='logo.png' height={30}  /></a> }
          </NavBar> :
          <NavBar
              leftContent={[
                  this.props.isFooter ? '': <a key='0' href="#/home"><Img  src='logo.png' height={30}  /></a>
                ]}
          >
            {
              this.props.isFooter ? 
              <div style={{width:'100%',textAlign:'right'}}><a href="#/home"><Img src='logo.png' height={30}  /></a></div> 
              : <SearchBar placeholder="搜索" maxLength={8} />}
          </NavBar>
        }
      </div>
    );
  }
}
