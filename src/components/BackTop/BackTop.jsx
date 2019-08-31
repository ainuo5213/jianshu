import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import $ from 'jquery'

import {toTop} from '../../api/dom'
import {
    BackTopWrapper,
    Tips
} from './backTopStyle'
import {action} from './store'


class BackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handle = () => {
        const {changeShow} = this.props;
        let scrollTop = $(window).scrollTop();
        if (scrollTop >= 200) {
            changeShow(true);
        } else {
            changeShow(false)
        }
    };

    componentDidMount() {
        $(window).on('scroll', this.handle)
    }

    handleClick = () => {
        toTop($, {
            limitTime: 600
        })
    };

    handleIn = () => {
        const {changeHover} = this.props;
        changeHover(true)
    };

    handleOut = () => {
        const {changeHover} = this.props;
        changeHover(false)
    };

    render() {
        const {isShow, isIn} = this.props;
        return (
            <React.Fragment>
                {
                    isShow ? <BackTopWrapper
                        onClick={this.handleClick}
                        onMouseEnter={this.handleIn}
                        onMouseLeave={this.handleOut}>
                        <i className="iconfont icon-webicon211"/>
                        <CSSTransition
                            timeout={400}
                            in={isIn}
                            classNames="show">
                            <Tips className={isIn ? "active" : ''}>回到顶部</Tips>
                        </CSSTransition>
                    </BackTopWrapper> : null
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isIn: state.getIn(['backTop', 'isIn']),
    isShow: state.getIn(['backTop', 'isShow'])
});

const mapDispatchToProps = dispatch => ({
    changeHover(flag) {
        dispatch(action.changeIn(flag))
    },
    changeShow(flag) {
        dispatch(action.changeShow(flag))
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(BackTop)