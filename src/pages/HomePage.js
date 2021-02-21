import React, { Component } from 'react'
import '../assets/style/HomePage.less'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import SubList from '../components/SubList'
import { Flex,Tabs,List } from 'antd-mobile'
import Img from '../components/Img'
import '../assets/fonts/iconfont.css'

const tabs = [
    { title: '产品' },
    { title: '出行' },
    { title: '深度' },
  ];
  const Item = List.Item;

export default class HomePage extends Component {

    render() {
        return (
            <div className='home-page'>
                {/* 头部 */}
                <Header />
                {/* 轮播图 */}
                <Banner />
                {/* 导航 */}
                <Subject />
                {/* 列表 */}
                <SubList  />
                {/* tab栏 */}
                <div className='tab'>
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                        <div>
                            <Flex className='tab-flex'>
                                <Flex.Item className='tab-left'>
                                    <Img src='20191025091907842.gif' height='80' />
                                </Flex.Item>
                                <Flex.Item className='tab-right'>
                                    <h3>计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头</h3>
                                    <p>
                                        <span>
                                            <i className='iconfont icon-shijian'></i>
                                            2小时前
                                        </span>
                                        <span style={{float:'right'}}>
                                            <i className='iconfont icon-liulan'></i>
                                            63
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>ECharts实现数据可视化入门教程（超详细）</Item>
                            <Item arrow="horizontal" onClick={() => {}}>【数据可视化】基于Dash制作的疫情数据可视化APP（Dash入门必读，附可运行源码</Item>
                            <Item arrow="horizontal" onClick={() => {}}>3D酷炫扭动卡片 html+css+js</Item>
                            <Item arrow="horizontal" onClick={() => {}}>你以为面试官问的是Vue，其实他想问……</Item>
                            <Item arrow="horizontal" onClick={() => {}}>面试的时候，不要只说我会“Vue全家桶”</Item>
                        </div>
                        <div>
                            <Flex className='tab-flex'>
                                <Flex.Item className='tab-left'>
                                    <Img src='banner1.png' height='80' />
                                </Flex.Item>
                                <Flex.Item className='tab-right'>
                                    <h3>浅谈web前端开发</h3>
                                    <p>
                                        <span>
                                            <i className='iconfont icon-shijian'></i>
                                            1小时前
                                        </span>
                                        <span style={{float:'right'}}>
                                            <i className='iconfont icon-liulan'></i>
                                            85
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>Web前端开发(15套)-Web开发文档类资源</Item>
                            <Item arrow="horizontal" onClick={() => {}}>11个web前端开发实战项目案例+源码！拿走就是了</Item>
                            <Item arrow="horizontal" onClick={() => {}}>快速入门Web前端开发</Item>
                            <Item arrow="horizontal" onClick={() => {}}>移动前端开发和 Web 前端开发的区别是什么？</Item>
                            <Item arrow="horizontal" onClick={() => {}}>面试的时候，不要只说我会“Vue全家桶”</Item>
                        </div>
                        <div>
                            <Flex className='tab-flex'>
                                <Flex.Item className='tab-left'>
                                    <Img src='banner3.png' height='80' />
                                </Flex.Item>
                                <Flex.Item className='tab-right'>
                                    <h3>全栈UI设计各类软件教程</h3>
                                    <p>
                                        <span>
                                            <i className='iconfont icon-shijian'></i>
                                            3小时前
                                        </span>
                                        <span style={{float:'right'}}>
                                            <i className='iconfont icon-liulan'></i>
                                            99
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>如何成为全栈UI设计师 目前UI学习就业怎么样</Item>
                            <Item arrow="horizontal" onClick={() => {}}>一名全栈设计师的常用设计工具，弥补不足，提升工作效率</Item>
                            <Item arrow="horizontal" onClick={() => {}}>UI设计不是美工，全栈设计师和美工有什么区别？</Item>
                            <Item arrow="horizontal" onClick={() => {}}>UI设计的7大就业方向，你应该成为什么样的人才？</Item>
                            <Item arrow="horizontal" onClick={() => {}}>UI or Web 是选择UI重构还是web全栈</Item>
                        </div>
                    </Tabs>
                </div>
                {/* 页面尾部 */}
                <Header isFooter />
                <div className="footer">
                    <p>© 2018-2019 ICP备案：粤ICP备17147191号</p>
                    <p>广州狼码教育科技有限公司</p>
                    <p>办公电话：020-85628002</p>
                    <p>地址：广州市天河区棠下大地商务港D栋603</p>
                </div>
            </div>
        )
    }
}
