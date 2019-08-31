import React, {Component} from 'react'
import {
    ListWrapper,
    ListItem,
    ImgWrapper,
    ContentWrapper,
    ContentTitle,
    ContentMeta,
    Content,
    ClickMore,
    ContentAddition
} from './listStyle'
import {connect} from 'react-redux'
import {action} from './store'

class List extends Component {
    componentDidMount() {
        const {initFirstPage} = this.props;
        initFirstPage();
    }

    loadingMore = () => {
        const {loadingMorePage, page, totalPage} = this.props;
        loadingMorePage(page, totalPage)
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const {totalPage, page, loadingMorePage} = nextProps;
        if (page + 1 === totalPage) {
            loadingMorePage()
        }
    }

    render() {
        const {list, tips, canLoadMore} = this.props;
        let newList = list.toJS();
        return (
            <React.Fragment>
                <ListWrapper>
                    <ul>
                        {
                            newList.map(item => {
                                return (
                                    <ListItem key={item.id}>
                                        <ImgWrapper>
                                            <img src={item.img_url} alt=""/>
                                        </ImgWrapper>
                                        <ContentWrapper>
                                            <ContentTitle>{item.title}</ContentTitle>
                                            <Content>
                                                {item.content}
                                            </Content>
                                            <ContentMeta>
                                                <span>
                                                    <i className="iconfont icon-zuanshi1"/>
                                                    &nbsp;{item.score}
                                                </span>
                                                <ContentAddition>{item.writer_name}</ContentAddition>&nbsp;
                                                <ContentAddition>
                                                    <i className="iconfont icon-pinglun2"/>
                                                    &nbsp;{item.comment_count}
                                                </ContentAddition>&nbsp;
                                                <span>
                                                    <i className="iconfont icon-aixin"/>
                                                                &nbsp;{item.like_count}
                                                </span>
                                            </ContentMeta>
                                        </ContentWrapper>
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                </ListWrapper>
                <ClickMore onClick={() => {
                    if (canLoadMore){
                        this.loadingMore()
                    } else {
                        return false
                    }
                }}>{tips}</ClickMore>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    list: state.getIn(['detail', 'list']),
    totalPage: state.getIn(['detail', 'totalPage']),
    page: state.getIn(['detail', 'page']),
    canLoadMore: state.getIn(['detail', 'canLoadMore']),
    tips: state.getIn(['detail', 'tips']),
});
const mapDispatchToProps = dispatch => ({
    initFirstPage () {
        dispatch(action.initFirstDetail(0, 'first'));
    },
    loadingMorePage (page, totalPage) {
        if (page + 1 < totalPage) {
            dispatch(action.initFirstDetail(page + 1, 'next'));
        }else {
            dispatch(action.changeTips());
        }
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(List)