import style from 'styled-components'
import {BannerJava} from '../Banner/bannerStyle'
import {AI} from '../../assets'
export const RecommendWrapper = style.div`
    width: 280px;
    margin-top: 20px;
`;

export const RecommendTitle = style.div`
    width: 280px;
    height: 19px;
    font-size: 14px;
    color: #969696;
    
    .page-change {
        display: inline-block;
        float: right;
        cursor: pointer;
        
        &:hover {
            color: #787878
        }
        
        & .iconfont {
            font-size: 13px;
            transform: rotate(0deg);
            display: inline-block;
            transition: transform .5s ease-in-out;
        }
    }
`;

export const RecommendWriter = style.div`
    width: 280px;
`;

export const RecommendWriterList = style.ul`
    width: 280px;
    overflow: hidden;
    
    li {
        width: 280px;
        height: 48px;
        display: block;
        margin-top: 15px;
        &::after {
            clear: both;
        }
        
        a {
            text-decoration: none;
            color: #000;
        }
        
        .avatar {
            width: 48px;
            height: 48px;
            display: inline-block;
            border-radius: 24px;
            overflow: hidden;
            background: #000;
            float: left;
            cursor: pointer;
            img {
                width: 48px;
                height: 48px;
            }
        }
        
        .attention {
            padding-top: 5px;
            color: #42c02e;
            font-size: 14px;
            float: right;
            cursor: pointer;
            
            .iconfont {
                font-size: 13px;
            }
        }
        
        .name {
            cursor: pointer;
            width: 280px;
            box-sizing: border-box;
            display:block;
            padding-top: 5px;
            font-size: 14px;
            margin-right: 60px;
            padding-left: 60px;
        }
        
        p {
            width: 280px;
            box-sizing: border-box;
            margin-top: 8px;
            font-size: 12px;
            color: #969696;
            display:block;
            margin-right: 60px;
            padding-left: 60px;
        }
    }
`;

export const CheckAll = style.a.attrs({
    href: '#'
})`
    width: 259px;
    height: 19px;
    display: block;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    text-decoration: none;
    color: #787878;
    border: 1px solid #dcdcdc;
    padding 9px 7px 7px 12px;
    margin-top: 18px;
`;

export const BannerAI = style(BannerJava)`
    background: url(${AI}) center center;
    background-size: cover;
`;