import React, { Component } from 'react'
import '../assets/style/FormBtn.less'

export default class FormBtn extends Component {
    render() {
        return (
            this.props.type === 'ordinary'?
            <a href="###" className='forget'>{this.props.children}</a>:
            // <button className={`btn ${this.props.isFull?'full':''}`}>{this.props.children}</button>
            <button className={'btn '+(this.props.isFull ? 'full':'')} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}
