import style from 'styled-components'

export const BackTopWrapper = style.a`
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 50px;
    text-align: center;
    line-height: 50px;
    right: 50px;
    border: 1px solid #dcdcdc;
    color: #333;
    transition: background .2s ease-in-out;
    &:hover {
        color: #f2f2f2;
        transition: background .2s ease-in-out;
        background: rgba(0, 0, 0, 0.08)
    }
    
    .iconfont {
        font-size: 25px;
        color: #000;
    }
`;

export const Tips = style.p`
    width: 76px;
    height: 30px;
    margin-bottom: 20px;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    font-size: 13px;
    position: absolute;
    top: 25%;
    right: 120%;
    opacity: 0;
    
    &.show-enter {
        opacity: 0;
    }
    
    &.show-enter-active {
        opacity: 1;
        transition: all .4s ease-in-out;
    }
    
    &.show-enter-done {
        opacity: 1;
    }
    
    &.show-exit {
        opacity: 1;
    }
    
    &.show-exit-active {
        opacity: 0;
        transition: all .4s ease-in-out;
    }
    
    &.show-exit-done {
        opacity: 0;
    }
    
    &::after {
        content: '';
        display: block;
        width:0;
        height:0;
        border-top:20px;
        border: 6px solid transparent;
        border-left-color: #000;
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translate3d(0, -50%, 0)
    }
`;