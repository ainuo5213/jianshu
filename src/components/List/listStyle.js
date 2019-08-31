import style from 'styled-components'

export const ListWrapper = style.section`
    width: 625px;
    margin-top: 25px;
    ul {
        width: 100%;
    }
`;

export const ListItem = style.li`
    width: 100%;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 0 15px;
    position: relative;
`;


export const ImgWrapper = style.a`
    width: 150px;
    height: 100px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -60px;
    overflow: hidden;
    border-radius: 5px;
    img {
        width: 150px;
        height: 100px;
    }
`;

export const ContentWrapper = style.div`
    width: 458px;
    height: 131px;
`;

export const ContentTitle = style.a`
    width: 100%;
    height: 27px;
    color: #333;
    cursor: pointer;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.5;
    &:visited{
        color: #2f2f2f;  
    }
    &:hover {
        text-decoration: underline;
    }
`;

export const Content = style.p`
    width: 458px;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`;

export const ContentMeta = style.div`
    width: 458px;
    height: 20px;
    font-size: 12.5px;
    font-weight: 400;
    line-height: 20px;
    
    a {
        margin-right: 10px;
        color: #b4b4b4;
    }
    span {
        margin-right: 10px;
        &:first-of-type {
            color: #ea6f5a;
        }
        &:last-of-type {
            color: #b4b4b4;
        }
        .iconfont {
            font-size: 10px;
        }
    }
`;

export const ContentAddition = style.a`
    margin-right: 10px;
    color: #b4b4b4;
    cursor: pointer;
    font-size: 12px;
    transition: color .1s ease-in-out;
    &:hover {
        color: #787878;
        transition: color .1s ease-in-out;
    }
    
    .iconfont {
        font-size: 14px;
        margin-top: 3px;
    }
    
`;

export const ClickMore = style.a`
    width: 100%;
    height: 20px;
    padding: 10px 15px;
    margin: 30px auto 60px;
    font-size: 15px;
    color: #fff;
    display: block;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    
    &:hover {
        background: #9b9b9b;
    }
`;
