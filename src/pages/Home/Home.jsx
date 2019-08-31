import React, {Component} from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './HomeStyle'
import List from '../../components/List/List'
import Slider from '../../components/Slider/Slider'
import Banner from '../../components/Banner/Banner'
import Recommend from "../../components/Recommend/Recommend"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackTop from "../../components/BackTop/BackTop";

export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Header {...this.props}/>
                <HomeWrapper>
                    <HomeLeft>
                        <Slider/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Banner/>
                        <Recommend/>
                    </HomeRight>
                </HomeWrapper>
                <BackTop/>
                <Footer/>
            </React.Fragment>
        );
    }
}
