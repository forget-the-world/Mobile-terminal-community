import React, { Component } from 'react'
import '../assets/style/formInput.less'
import '../assets/fonts/iconfont.css'

export default class FormInput extends Component {
    render() {
        return (
            <div className='input-user'>
                {/* 字体图标 */}
                <i className={'iconfont icon-'+this.props.iconclass}></i>
                {/* 输入框 */}
                {/* <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} /> */}
                {/* 获取父组件属性值的简写 */}
                <input {...this.props} />
            </div>
        )
    }
}
