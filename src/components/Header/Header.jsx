import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {actions} from './store'
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchBtn,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    NavSearch
} from './HeaderStyle'
import {beta} from '../../assets'
import {rotate} from "../../api/dom";

class Header extends Component {
    getListArea = () => {
        let {
            list,
            page,
            changeMouseEnter,
            changeMouseLeave,
            focused,
            mouseIn,
            totalPage,
            changePage
        } = this.props;
        let pageList = [];
        const newList = list.toJS();//将immutable数组转换位普通数据
        if (newList.length) {
            for (let i = (page - 1) * 10, len = page * 10; i < len; i++) {
                let item = newList[i] ? <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem> : null;
                pageList.push(item)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={changeMouseEnter} onMouseLeave={changeMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            changePage(page, totalPage, this.icon)
                        }}>
                            <i className="refresh iconfont icon-shuaxin" ref={el => this.icon = el}/>换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        }

    };

    toRegister = () => {
        const {history} = this.props;
        history.push('/lr/register')
    };

    toLogin = () => {
        const {history} = this.props;
        history.push('/lr/login')
    };

    render() {
        const {focused, handleFocus, handleBlur, list} = this.props;
        return (
            <React.Fragment>
                <HeaderWrapper>
                    <Logo>logo</Logo>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right" onClick={this.toLogin}>登录</NavItem>
                        <NavItem className="right beta"><img src={beta} alt=""/></NavItem>
                        <NavItem className="right Aa">Aa</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                timeout={400}
                                in={focused}
                                classNames="slide">
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => {
                                        handleFocus(list)
                                    }}
                                    onBlur={handleBlur}/>
                            </CSSTransition>
                            <SearchBtn className={'iconfont icon-sousuo ' + (focused ? 'focused' : '')}/>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="write"><i className="pen iconfont icon-weibiaoti1"/>写文章</Button>
                        <Button className="register" onClick={this.toRegister}>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </React.Fragment>
        );
    }
}

//容器组件，链接组件，派发action，更新state，
// 我们处理过state（将其变为了immutable对象），使用get方法或getIn方法（传入一个数据，依次去取）
const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page'])
});

const mapDispatchToProps = (dispatch) => ({
    handleFocus(list) {//因为list是一个immutable数据，size是其大小
        dispatch(actions.handleFocus(true));
        !list.size && dispatch(actions.getList())
    },
    handleBlur() {
        dispatch(actions.handleFocus(false))
    },
    changeMouseEnter() {
        dispatch(actions.changeMouseEnter(true))
    },
    changeMouseLeave() {
        dispatch(actions.changeMouseEnter(false))
    },
    changePage(page, totalPage, icon) {
        rotate(icon, () => {
            if (page < totalPage) {
                dispatch(actions.changePage(page + 1))
            } else {
                dispatch(actions.changePage(1))
            }
        });
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Header)