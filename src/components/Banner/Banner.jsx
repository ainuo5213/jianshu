import React, {Component} from 'react'
import {
    vip,
    youxuan,
    copyright,
    study,
    code
} from '../../assets'
import {
    BannerTop,
    BannerItem,
    BannerCodeItem,
    BannerCode,
    BannerCodeHover,
    BannerJava,
} from './bannerStyle'
import {CSSTransition} from "react-transition-group";

export default class Banner extends Component {
    state = {
        imgList: [vip, youxuan, copyright, study],
        show: false,
    };


    changeShow = (flag) => {
        this.setState({show: flag})
    };

    render() {
        const {imgList, show} = this.state;
        return (
            <React.Fragment>
                <BannerTop>
                    {
                        imgList.map((item, index) =>
                            <BannerItem key={index}>
                                <img src={item} alt=""/>
                            </BannerItem>)
                    }
                </BannerTop>
                <BannerCode onMouseEnter={() => {
                    this.changeShow(true)
                }} onMouseLeave={() => {
                    this.changeShow(false)
                }}>
                    <img src={code} alt=""/>
                    <BannerCodeItem>
                        <div>下载简书手机App<i className="iconfont icon-xiangyou"/></div>
                        <div>随时随地发现和创作内容</div>
                    </BannerCodeItem>
                </BannerCode>
                <CSSTransition
                    timeout={400}
                    in={show}
                    classNames="slide">
                    <BannerCodeHover className={show ? 'active' : ''}>
                        <img src={code} alt=""/>
                    </BannerCodeHover>
                </CSSTransition>
                <BannerJava>
                    <span>广告</span>
                </BannerJava>
            </React.Fragment>
        );
    }
}