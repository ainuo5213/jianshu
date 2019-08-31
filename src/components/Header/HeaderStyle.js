import styled from 'styled-components'
import {logo} from '../../assets'

export const HeaderWrapper = styled.div`
    height: 57px;
    width: 100%;
    position: fixed;
    position: 0;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    z-index: 1
`;

export const Logo = styled.a.attrs({href:'/'})`
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    display: block;
    background: url(${logo}) center center no-repeat;
    background-size: contain;
    text-indent: -9999px;
`;

export const Nav = styled.nav`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    padding-right: 40px;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    cursor: pointer;
    font-size: 17px;
    &.left {
        float:left;
        &.active {
            color: #ea6f5a;
        }
        &:not(.active):hover {
            background: #eee;
        }
    }
    &.right {
        float: right;
        color: #969696;
        
        &.Aa {
            font-family: "Times New Roman", serif;
            font-weight: bold;
        }
        
        &.beta {
            padding-top: 5px;
            box-sizing: border-box;
    
            img {
                height: 25px;
            }
      }
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
      width: 160px;
      height: 38px;
      border: none;
      outline: none;
      border-radius: 19px;
      background: #eee;
      margin-top: 9px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 14px;
      margin-left: 20px;
      
      &::placeholder {
          color: #999;
      }
      
      &.focused {
          width: 240px;
      }

      &.slide-enter {/*即将入场*/
          transition: all .4s ease-in-out;
      }

      &.slide-enter-active {/*正在入场*/
          width: 240px;
      }

      &.slide-exit {/*即将离场，加上过渡效果*/
          transition: all .4s ease-in-out;
      }

      &.slide-exit-active {/*正在离场，走到目标长度*/
          width: 160px;
      }
`;

export const SearchBtn = styled.i`
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        
        &.focused {
            background: #969696;
            color: #fff;
        }
`;

export const SearchInfo = styled.div`
    position: absolute;
    border-radius: 5px;
    left: 20px;
    top: 56px;
    width: 250px;
    box-sizing: border-box;
    padding: 0 20px 5px 20px;
    background: #fff;
    z-index:1;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    
    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    color: #969696;
    line-height: 20px;
    font-size: 14px;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    padding-left: 18px;
    &:hover {
        color: #2f2f2f
    }
    & .refresh {
        font-size: 9px;
        display: inline-block;
        position: absolute;
        left: 0px;
        transition: all .5s ease-in-out;
        transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.a.attrs({href:"#"})`
    line-height: 20px;
    text-decoration: none;
    padding: 2px 6px;
    font-size: 12px;
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878
    
    &:hover {
        color: #333;
        border-color: #b4b4b4;
    }
`;

export const SearchInfoList = styled.div`
    margin-top: 10px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    font-size: 14px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ea6f5a;
    cursor: pointer;
    &.register {
        color: #ec6149;
        padding: 0 25px;
        transition: background-color .5s;
        
        &:hover {
            background-color: #eee;
            border: 1px solid #ec6149;
            transition: background-color .5s;
        }
    }
    
    &.write {
        color: #fff;
        background: #ea6f5a;
        
        .pen {
            font-size: 17px;
            color: #fff;
        }
        
        &:hover {
            background-color: #ec6149;
        }
    }
`;
