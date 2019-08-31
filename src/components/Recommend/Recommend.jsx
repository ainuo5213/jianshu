import React, {Component} from 'react'
import {connect} from 'react-redux'
import {action} from './store'
import {
    RecommendWrapper,
    RecommendWriter,
    RecommendWriterList,
    CheckAll,
    BannerAI,
    RecommendTitle
} from './recommendStyle.js'
import {changeNumToKilo} from '../../api/num'
import {rotate} from "../../api/dom";

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount(preProps, preContext) {
        const {initFirstPage} = this.props;
        initFirstPage()
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {list} = nextProps;
        let newList = list.toJS();
        return newList.length !== 0;

    }

    render() {
        const {list, getWriters, page, totalPage} = this.props;
        let newList = list.toJS();
        if (newList.length === 0) {
            return <div>没有数据了</div>
        } else {
            return (
                <React.Fragment>
                    <RecommendWrapper>
                        <RecommendTitle>
                            <span className="title">推荐作者</span>
                            <span className="page-change" onClick={() => {
                                getWriters(page, totalPage, this.icon)
                            }}><i className="iconfont icon-shuaxin"
                                  ref={el => this.icon = el}/>&nbsp;换一批</span>
                        </RecommendTitle>
                        <RecommendWriter>
                            <RecommendWriterList>
                                {
                                    newList.map((item, index) => {
                                        return <li key={index}>
                                            <div  className="avatar"><img src={item.avatar_source} alt=""/></div>
                                            <div  className="attention"><i
                                                className="iconfont icon-follow"/>关注</div>
                                            <div  className="name">{item.nickname}</div>
                                            <p>写了{changeNumToKilo(item.total_wordage)}字，{changeNumToKilo(item.total_likes_count)}喜欢</p>
                                        </li>
                                    })
                                }
                            </RecommendWriterList>
                            <CheckAll>查看全部</CheckAll>
                        </RecommendWriter>
                        <BannerAI>
                            <span>广告</span>
                        </BannerAI>
                    </RecommendWrapper>
                </React.Fragment>
            );
        }

    }
}

const mapStateToProps = state => ({
    page: state.getIn(['recommend', 'page']),
    totalPage: state.getIn(['recommend', 'totalPage']),
    list: state.getIn(['recommend', 'list']),
});

const mapDispatchToProps = (dispatch) => ({
    initFirstPage() {
        dispatch(action.initPage(0))
    },
    getWriters(page, totalPage, icon) {
        rotate(icon, () => {
            if (page < totalPage - 1) {
                dispatch(action.initPage(page + 1))
            } else {
                dispatch(action.initPage(0))
            }
        })
    }
});
export default connect(
    mapStateToProps, mapDispatchToProps
)(Recommend)