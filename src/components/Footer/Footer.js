import React from 'react'
import {realname} from '../../assets'
import {
    FooterWrapper,
    FooterIcp,
    FooterMiddle,
    FooterTop,
    FooterBottom
} from './footerStyle'

export default function () {
    const As = [
        '关于简书', '联系我们', '加入我们', '简书出版', '品牌与徽标', '帮助中心', '合作伙伴'
    ];
    return (

        <FooterWrapper>
            {
                As.map((a, index) => {
                    return (
                        <span key={index} className="item">{a}&nbsp;· </span>
                    )
                })
            }

            <FooterIcp>
                <FooterTop>
                    <span>
                        ©2012-2019 上海佰集信息科技有限公司 / 简 / 沪ICP备11018329号-5 /
                    </span>
                    <span className="relname">
                        <img src={realname} alt=""/>
                    </span>
                    <span className="police">
                        沪公网安备31010402002252号 /
                    </span>
                </FooterTop>
                <FooterMiddle>
                    <span className="phone"/>
                    <span className="inform">简书网举报电话：021-34770013 / </span>
                    <span className="police"/>
                    <span className="tips">亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产</span>
                </FooterMiddle>
                <FooterBottom>
                    <span className="tips">
                        被骗受损而设，请您一旦收到来电，立即接听 /
                    </span>
                    <span className="gcd"/>
                </FooterBottom>
            </FooterIcp>
        </FooterWrapper>
    )
}