import style from 'styled-components'
import {phone, police, gcd} from '../../assets'
export const FooterWrapper = style.footer`
    width: 960px;
    height: 118px;
    margin: 80px auto 0;
    font-size: 13px;
    color: #969696;
    
    .item {
        cursor: pointer;
        color: #969696;
        
        &:hover {
            color: #2f2f2f;
        }
    }
`;

export const FooterIcp = style.div`
    color: #c8c8c8;
    height: 90px;
    width: 665px;
    margin-top: 10px;
    font-size: 12px;
`;

export const FooterMiddle = style.div`
    height: 30px;
    span {
        display: inline-block;
        height: 30px;
    }
    .phone {
        cursor: pointer;
        width: 60px;
        background: url(${phone});
        background-size: contain
    } 
    
    .inform, .tips {
        position: relative;
        bottom: 10px;;
    }   
    
    .police {
        width: 30px;
        background: url(${police});
        cursor: pointer;
        background-size: contain;
        
    }
    
`;

export const FooterTop = style.div`
    position: relative;
    height: 30px;
    line-height: 30px;
    
    img {
        position: absolute;
        cursor: pointer
    }
    
    .police {
        cursor: pointer;
        margin-left: 60px;
        &:hover {
            color: #2f2f2f;
        }
    }
`;

export const FooterBottom = style.div`
    height: 30px;
    line-height: 30px;
    .tips {
        position: relative;
        bottom: 10px;
    }
    .gcd {
        display: inline-block;
        width: 25.3px;
        height: 30px;
        background: url(${gcd});
        cursor: pointer;
        background-size: contain
    }
`;