import React, { Component } from 'react'
import '../assets/style/loginPage.less'
import Img from '../components/Img'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
// import {Link} from 'react-router'
import axios from 'axios'
import {Toast} from 'antd-mobile'

export default class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:''
        }
        this.user = /^[a-zA-Z][a-zA-Z0-9_]{7,15}$/;
        this.psd = /^[a-zA-Z]\w{5,17}$/;
    }

    userChange(e){
        console.log(e.target.value);
        // 修改this.state.userName
        this.setState({
            userName:e.target.value
        })
    }
    psdChange(e){
        this.setState({
            password:e.target.value
        })
    }
    handleClick(e){
        // 阻止浏览器默认行为，在这里是点击按钮直接跳转,没阻止的话页面加载后点击登录第一次不会跳转到主页,第二次才会生效  阻止button按钮的提交行为
        e.preventDefault();
        // 发起登录请求
        let params = {
            userName:this.state.userName,
            password:this.state.password
        }
        axios.get('/server/data.json',params).then((res)=>{
          
            if(res.data.success){
                if( params.userName.length > 4  || params.password.length === 6 ){
                    // console.log(this.user);
                    Toast.success('登录成功',2)
                    this.props.router.push('/home')
                }else{
                    Toast.fail('用户或密码不正确',2)
                    console.log(this.user);
                }
                // Toast.success('登录成功',2)
                // // console.log(res.data.message);
                // this.props.router.push('/home')
            }
        })
    }

    render() {
        return (
            <div className='login-page'>
                {/* logo图片 */}
                <Img src='logo.png' />
                {/* form表单 */}
                <form className='login-form'>
                    {/* 用户名 */}
                    <FormInput type='text' iconclass='shouji' placeholder='用户名' value={this.state.userName} onChange={this.userChange.bind(this)} />
                    {/* 密码 */}
                    <FormInput type='password' iconclass='mima' placeholder='密码' value={this.state.password} onChange={this.psdChange.bind(this)} />
                    {/* 登录按钮 */}
                    <FormBtn isFull={true} onClick={this.handleClick.bind(this)}>登录</FormBtn>
                    {/* 忘记密码 */}
                    <FormBtn type='ordinary'>忘记密码</FormBtn>
                    {/* 免费注册 */}
                    <FormBtn>免费注册</FormBtn>&emsp;
                    {/* 游客登陆 */}
                    <FormBtn>游客登陆</FormBtn>
                </form>
            </div>
        )
    }
}
