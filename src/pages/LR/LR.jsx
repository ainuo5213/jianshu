import React, {Component} from 'react'
import {connect} from 'react-redux'
import {action} from './store'
import {
    LRWrapper,
    Logo,
    Main,
    TitleWrapper,
    TitleItem,
    Container,
    MoreSign,
    MoreSignWrapper,
    MoreSignItem,
    Protocol,
    Form
} from './lrStyle'

import {
    logo
} from '../../assets'
import {checkUsername} from '../../api/validate'

class LR extends Component {

    componentWillMount() {
        this.setLr()
    }

    setLr = () => {
        const {location, changeState} = this.props;
        let arr = location.pathname.split('/');
        if (arr.includes('login')) {
            changeState('lr', 'login')
        } else if (arr.includes('register')) {
            changeState('lr', 'register')
        }
    };

    handleChange = (state, e) => {
        const {changeState} = this.props;
        changeState(state, e.target.value);
    };

    checkUsername = (state) => {
        const {checkValidate} = this.props;
        let res = checkUsername(state);
        if (!res) {
            checkValidate('username', false)
        }
        // const {handleBlur, username} = this.props;
        // const {code} =  await handleBlur(state, username);
        // if (code === 0) { //可以注册
        //
        // } else if (code === 1) { //系统异常
        //
        // } else if (code === 2) { // 不能注册
        //
        // }
    };

    doRegister = async () => {
        const {doRegister, username, password, phone_number, history} = this.props;
        const {code} = await doRegister({username, password, phone_number});
        if (code === 0) {
            history.push('/')
        } else if (code === 1) {
            alert('系统异常')
        } else if (code === 2) {
            alert('注册失败')
        }
    };

    render() {
        const {lr, username, phone_number, password} = this.props;
        if (!lr) {
            return null;
        }
        if (lr === 'login') {
            return (
                <React.Fragment>
                    <LRWrapper>
                        <Logo>
                            <img src={logo} alt=""/>
                        </Logo>
                        <Main>
                            <TitleWrapper>
                                <TitleItem className='active' href='/lr/login'>登录</TitleItem>
                                <b>·</b>
                                <TitleItem href='/lr/register'>注册</TitleItem>
                            </TitleWrapper>
                            <Container>
                                <Form>
                                    <p>
                                        <i className="iconfont icon-user"/>
                                        <input autoComplete="off"
                                               type="text"
                                               name="username"
                                               placeholder="手机号或邮箱"
                                               className="style username"
                                        />
                                    </p>
                                    <p>
                                        <i className="iconfont icon-mima"/>
                                        <input autoComplete="off" type="password" name="password" placeholder="密码"
                                               className="style password last"/>
                                    </p>
                                    <p className="checkBox">
                                        <input type="checkbox" name="trust" className="trust"/>
                                        <span>记住我</span>
                                    </p>
                                    <div className="toggle">
                                        <span>登陆遇到问题?</span>
                                    </div>
                                    <span className="submit login">登录</span>
                                </Form>
                                <MoreSign>
                                    <h6>社会账号登录</h6>
                                    <MoreSignWrapper>
                                        <MoreSignItem>
                                            <i className="iconfont icon-weibo"/>
                                        </MoreSignItem>
                                        <MoreSignItem>
                                            <i className="iconfont icon-weixin"/>
                                        </MoreSignItem>
                                        <MoreSignItem>
                                            <i className="iconfont icon-qq"/>
                                        </MoreSignItem>
                                        <MoreSignItem>
                                            <i className="iconfont icon-More"/>
                                        </MoreSignItem>
                                    </MoreSignWrapper>
                                </MoreSign>
                            </Container>
                        </Main>
                    </LRWrapper>
                </React.Fragment>
            );
        } else if (lr === 'register') {
            return (
                <React.Fragment>
                    <LRWrapper>
                        <Logo>
                            <img src={logo} alt=""/>
                        </Logo>
                        <Main>
                            <TitleWrapper>
                                <TitleItem href='/lr/login'>登录</TitleItem>
                                <b>·</b>
                                <TitleItem className='active' href='/lr/register'>注册</TitleItem>
                            </TitleWrapper>
                            <Container>
                                <Form>
                                    <p>
                                        <i className="info iconfont icon-user"/>
                                        <input autoComplete="off"
                                               type="text"
                                               name="username"
                                               placeholder="你的昵称"
                                               className="style username"
                                               value={username}
                                               onChange={(e) => {
                                                   this.handleChange('username', e)
                                               }}
                                               onBlur={() => {
                                                   this.checkUsername(username)
                                               }}
                                        />
                                        <i className="tips iconfont icon-cuowu"/>
                                    </p>
                                    <p>
                                        <i className="info iconfont icon-shoujihao"/>
                                        <input autoComplete="off"
                                               type="text"
                                               name="phone"
                                               placeholder="手机号"
                                               className="style phone"
                                               value={phone_number}
                                               onChange={(e) => {
                                                   this.handleChange('phone_number', e)
                                               }}
                                        />
                                        <i className="tips iconfont icon-cuowu"/>
                                    </p>
                                    <p>
                                        <i className="info iconfont icon-mima"/>
                                        <input autoComplete="off"
                                               type="password"
                                               name="password"
                                               placeholder="设置密码"
                                               className="style password last"
                                               value={password}
                                               onChange={(e) => {
                                                   this.handleChange('password', e)
                                               }}
                                        />
                                        <i className="tips iconfont icon-cuowu"/>
                                    </p>
                                    <span className="submit register" onClick={this.doRegister}>注册</span>
                                </Form>
                                <Protocol>点击 “注册” 即表示您同意并愿意遵守简书 <br/>
                                    <span>用户协议</span>&nbsp;和&nbsp;<span>隐私政策</span> 。
                                </Protocol>
                                <MoreSign>
                                    <h6>社交帐号直接注册</h6>
                                    <MoreSignWrapper>
                                        <MoreSignItem>
                                            <i className="iconfont icon-weixin"/>
                                        </MoreSignItem>
                                        <MoreSignItem>
                                            <i className="iconfont icon-qq"/>
                                        </MoreSignItem>
                                    </MoreSignWrapper>
                                </MoreSign>
                            </Container>
                        </Main>
                    </LRWrapper>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = state => ({
    lr: state.getIn(['lr', 'lr']),
    username: state.getIn(['lr', 'username']),
    phone_number: state.getIn(['lr', 'phone_number']),
    password: state.getIn(['lr', 'password']),
});
const mapDispatchToProps = dispatch => ({
    changeState(state, value) {
        dispatch(action.changeState(state, value))
    },
    async doRegister({username, password, phone_number}) {
        return dispatch(action.doRegister({username, password, phone_number}));
    },
    handleBlur(state, value) {
        return dispatch(action.handleBlur(state, value))
    },
    checkValidate(state, value) {
        dispatch(action.checkValidate(state, value))
    }
});
export default connect(
    mapStateToProps, mapDispatchToProps
)(LR)