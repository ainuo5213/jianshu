import React, {Component} from 'react'
import {Slider, Dot, Button, Buttons, Dots} from "./sliderStyle";
import {banner, banner2} from '../../assets'
import $ from "jquery";

export default class SliderAuto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseIn: false,
            current: 0,
            width: 0,
            len: 0,
            interval:4000,
            images: [banner, banner2],
            isMoving: false
        }
    }

    componentWillMount() {
        let list = [banner, banner2];
        this.setState({images: list, len: list.length})
    }

    componentDidMount() {
        let {len} = this.state;
        let width = $(this.sliderContainer).width();
        this.setState({width}, () => {
            this.slider.style.width = width * len + 'px';
            this.autoPlay();
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    move = (dir) => {
        let {len, width, current, isMoving} = this.state;
        if (isMoving) {
            return;
        }
        if (dir === 'right') {
            current++;
            current = current > len - 1 ? 0 : current;
            this.setState({current, isMoving: true}, () => {
                $(this.slider).animate({
                    left: -width + 'px'
                }, 600, () => {
                    $(this.slider).find('img').first().appendTo($(this.slider));
                    $(this.slider).css('left', 0);
                    this.setState({isMoving: false})
                });
            });
        } else if (dir === 'left') {
            current--;
            current = current < 0 ? len - 1 : current;
            this.setState({current, isMoving: true}, () => {
                $(this.slider).find('img').last().prependTo($(this.slider));
                $(this.slider).css('left', -width + 'px');
                $(this.slider).animate({
                    left: 0
                }, 600, () => {
                    this.setState({isMoving: false})
                });
            })
        } else {
            this.setState({isMoving: true, current: dir});
            $(this.slider).animate({
                left: -dir * width
            }, 600, () => {
                this.setState({isMoving: false})
            });
        }
    };

    autoPlay = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.move('right');
            this.autoPlay();
        }, this.state.interval)
    };

    mouseIn = () => {
        this.setState({mouseIn: true}, function () {
            clearTimeout(this.timer);
            $(this.buttons).css('opacity', 1)
        });

    };

    manualMove = (e) => {
        const {className} = e.target;
        const classNames = className.split(' ');
        if (classNames.includes('left')) {
            this.move('left')
        } else if (classNames.includes('right')) {
            this.move('right')
        }
    };

    mouseLeave = () => {
        this.setState({
            mouseIn: false
        }, () => {
            this.autoPlay();
            $(this.buttons).css('opacity', 0)
        });
    };

    changeImg = (e) => {
        const {className} = e.target;
        const classNames = className.split(' ');
        if (classNames.includes('active')) {
            return false;
        } else {
            this.move($(e.target).index())
        }
    };

    render() {
        let {images, current} = this.state;
        return (
            <React.Fragment>
                <Slider onMouseEnter={this.mouseIn} onMouseLeave={this.mouseLeave}
                        ref={el => this.sliderContainer = el}>
                    <div className="banner" ref={el => this.slider = el}>
                        {images.map((image, index) => {
                            return <img key={index} src={image} alt=""
                                        className={'banner-img ' + (current === index ? 'active' : '')}/>
                        })}
                    </div>
                    <Dots onClick={this.changeImg}>
                        {images.map((image, index) => {
                            return <Dot key={index} className={current === index ? 'active' : ''}/>
                        })}
                    </Dots>
                    <Buttons ref={el => this.buttons = el} onClick={this.manualMove}>
                        <Button className="left iconfont icon-xiangzuo"/>
                        <Button className="right iconfont icon-xiangyou"/>
                    </Buttons>
                </Slider>
            </React.Fragment>
        );
    }
}