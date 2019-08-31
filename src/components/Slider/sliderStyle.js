import styled from "styled-components";


export const Slider = styled.div`
    width: 625px;
    height: 270px;
    position: relative;
    overflow: hidden;
    border-radius:5px;
    
    .banner {
        height: 270px;
        position: absolute;
        left: 0;
        top: 0;
        
        
        .banner-img {
            width: 625px;
            display: inline-block;
            cursor:pointer
            
        }
    }
    
`;


export const Buttons = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    font-size: 25px;
    color: #fff;
    transform:translate3d(0,-50%,0);
    opacity: 0;
    transition: opacity .2s ease-in-out
`;

export const Button = styled.div`
    width: 40px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: rgba(0,0,0,.5);
    cursor: pointer;
    font-size: 20px;
    
    &.left {
        float: left;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px
    }
    &.right{
        float: right;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px
    }
`;

export const Dots = styled.ul`
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 20px;
    left: 0;
    text-align: center;
    line-height:20px;
`;

export const Dot = styled.li`
    display: inline-block;
    width: 25px;
    height: 2px;
    background: rgba(0,0,0,.5);
    margin: 10px;
    cursor: pointer
    
    &.active {
        background: rgba(255,255,255,.8);
        transition: background .3s ease-in-out
    }
`;