import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../redux/store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import LR from "../pages/LR/LR";

export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Router>

                    <Route path='/' exact component={props => <Home {...props}/>}/>
                    <Route path='/detail' exact component={props => <Detail {...props}/>}/>
                    <Route path='/lr' component={props => <LR {...props}/>}/>
                </Router>
            </React.Fragment>
        );
    }
}