import style from 'styled-components'
import {javabanner} from '../../assets'

export const BannerTop = style.div`
    width: 280px;
    margin-bottom: 10px;
`;

export const BannerItem = style.a.attrs({
    href: '#'
})`
    width: 280px;
    display: block;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 5px;
    
    img {
        width: 100%;
    }
`;

export const BannerCode = style.a.attrs({
    href: '#'
})`
    width : 234px;
    height: 60px;
    display: inline-block;
    padding: 10px 22px;
    border-radius: 5px;
    position: relative;
    font-size: 15px;
    color: #333;
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 10px;
    img {
        width: 60px;
    }
`;


export const BannerCodeItem = style.div`
    width: 143px;
    height: 43px;
    margin-left: 7px;
    position: absolute;
    right: 22px;
    top: 10px;
    padding-right: 20px;
    padding-top: 10px;
    div:last-of-type {
        font-size: 13px;
        margin-top: 8px;
        color: #999;
    }
`;


export const BannerJava = style.a.attrs({
    href: '#'
})`
    position: relative;
    display: block;
    width: 280px;
    height: 160px;
    margin-top: 15px;
    border-radius: 5px;
    background: url(${javabanner});
    background-size: cover;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
    
    span {
        width: 24px;
        height: 20px;
        padding: 0 5px;
        background: #000;
        font-size: 12px;
        display: block;
        line-height: 20px;
        opacity: 0.7;
        position: absolute;
        // bottom: 15px;
        bottom: 0px;
        right: 0;
        border-bottom-right-radius: 5px;
    }
`;
export const BannerCodeHover = style.div`
    width: 185px;
    height: 185px;
    top: 30px;
    left: 50px;
    position: absolute;
    opacity: 0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    overflow: hidden;
    background #fff;
    &.active {
        opacity: 1;
    }
    
    &.slide-enter {/*即将入场*/
          transition: all .4s ease-in-out;
    }

    &.slide-enter-active {/*正在入场*/
          opacity: 1;
    }

    &.slide-exit {/*即将离场，加上过渡效果*/
          transition: all .4s ease-in-out;
    }
    
    &.slide-exit-active {/*正在离场，走到目标长度*/
         opacity: 0;
    }
      
    img {
        position: relative;
        width: 155px;
    }
`;