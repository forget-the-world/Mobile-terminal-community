import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import Img from './Img'

export default class SubListItem extends Component {
    render() {
        return (
            <a href="#/detail" style={{color:'#333'}}>
                <Flex className='sub-list-item'>
                <Flex.Item>
                    <Img src={this.props.obj.img} height={80} />
                </Flex.Item>
                <Flex.Item>
                    <h3>{this.props.obj.title}</h3>
                    <p>{this.props.obj.des}</p>
                </Flex.Item>
            </Flex> 
            </a>                              
        )
    }
}
