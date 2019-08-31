import style from 'styled-components'

export const LRWrapper = style.div`
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    min-height: 750px;
    font-size: 14px;
    position: relative;
    color: #969696;
`;

export const Logo = style.a.attrs({
    href: '/'
})`
    display: block;
    position: absolute;
    top: 23px;
    transform: scale(0.9)
`;

export const Main = style.div`
    width: 300px;
    position: absolute;
    top: 60px;
    left: 50%;
    padding: 50px 50px 30px;
    transform: translate3d(-50%, 0, 0);
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 4px;
`;

export const TitleWrapper = style.div`
    width: 280px;
    height: 19px;
    padding: 10px;
    text-align: center;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    margin: 0 auto 50px;
    b {
        padding: 10px;
        font-size: 22px;
    }
`;

export const TitleItem = style.a`
    padding: 10px;
    color: #969696;
    text-decoration: none;
    &:first-of-type{
        margin-right: 5px;
    }
    
    &:last-of-type {
        margin-left: 5px;
    }
    
    &:not(.active):hover {
        border-bottom: 2px solid #ea6f5a;
    }
    
    &.active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const Container = style.div`
    width: 300px;
    
`;

export const Form = style.form`
    width: 300px;
    height: 196px;
    margin-bottom: 30px;
    margin: 0 0 20px;
    
    input.style{
        width: 251px;
        height: 41px;
        font-size: 14px;
        padding: 4px 12px 4px 35px;
        background-color: hsla(0,0%,71%,.1);
        border: 1px solid #c8c8c8;
        outline: none;
        border-bottom: none;
        
        &.last {
            border-bottom: 1px solid #c8c8c8
        }
        &.username {
            border-radius: 4px 4px 0 0;
        }
        
        &.password {
            border-radius: 0 0 4px 4px;
        }
    }
    p {
        position: relative;
        
        &.checkBox {
            display: inline-block;
            margin: 15px 0 15px -5px;
            font-size: 15px;
            
            span {
                margin-left: 5px
            }
        }
    }
    
    .toggle {
        position absolute;
        right: 50px;
        margin-top: -30px;
        cursor: pointer;
        color: #969696;
        
        &:hover{
            color: #000;
        }
    }
    
    .iconfont {
        color: #969696;
        font-size: 18px;
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        
        &.info {
            left: 10px;
        }
        
        &.tips {
            right: -20px;
        }
    }
    
    .submit {
        display: block;
        width: 264px;
        height: 30px;
        padding: 9px 18px;
        border-radius: 25px;
        font-size: 18px;
        margin-top: 20px;
        cursor: pointer;
        background: #3194d0;
        color: #fff;
        text-align: center;
        line-height: 30px;
        
        &.register {
            background: #42c02e;
        }
        
        &.login:hover {
            background: #187cb7;
        }
        
        &.register:hover {
            background: #3db922;
        }
    }
`;

export const MoreSign = style.div`
    width: 300px;
    height: 73px;
    position: relative;
    margin: 50px 0 10px 0px;
    color: #b5b5b5;
    font-size: 12px;
    text-align: center;
    
     &::before, &::after {
        border-top: 1px solid #b5b5b5;
        position: absolute;
        width: 60px;
        content: "";
        display: block;
        top: 5px;
    }
    
    &::before {
        left: 30px;
    }
    
    &::after {
        right: 30px;
    }
`;

export const MoreSignWrapper = style.ul`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px; 
`;

export const MoreSignItem = style.li`
    width: 50px;
    height: 50px;
    margin: 0 5px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    
    i {
        font-size: 24px;    
        
        &.icon-weibo {
            color: #e05244
        }
        
        &.icon-weixin {
            color: #00bb29
        }
        
        &.icon-qq {
            color: #498ad5
        }
    }
`;

export const Protocol = style.p`
    margin: 30px 0;
    width: 300px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    
    span {
        color: #3194d0;
        cursor: pointer;
    }
    
`;
