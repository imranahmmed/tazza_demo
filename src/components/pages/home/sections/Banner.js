import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Slide from './Slide';

const Banner = () => {
    let [dotActive, setDotActive] = useState(0);
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "3%",
                    transform: "translateY(-50%)"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive ?
                        {
                            color: "#39404a",
                            borderRight: "3px #39404a solid",
                            padding: "10px 20px",
                            fontWeight: "400",
                            display: "block",
                            fontSize: "30px"
                        }
                        :
                        {
                            color: "transparent",
                            borderRight: "3px white solid",
                            padding: "10px 0px",
                            fontWeight: "400",
                            display: "none"
                        }}

            >
                0{i + 1}
            </div>
        ),

        responsive: [
            {
                breakpoint: 1830,
                settings: {
                    dots: true,
                    appendDots: dots => (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "2%",
                                transform: "translateY(-50%)"
                            }}
                        >
                            <ul style={{ margin: "0px" }}> {dots} </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div
                            style={
                                i === dotActive ?
                                    {
                                        borderRight: "3px #39404a solid",
                                        padding: "10px",
                                        fontSize: "24px"
                                    }
                                    :
                                    {
                                        borderRight: "3px white solid",
                                        padding: "10px",
                                        display: "none"
                                    }}

                        >
                            0{i + 1}
                        </div>
                    ),
                }
            },
            {
                breakpoint: 1535,
                settings: {
                    dots: true,

                    appendDots: dots => (
                        <div
                            style={{
                                left: "2%",
                            }}
                        >
                            <ul style={{ margin: "0px" }}> {dots} </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div
                            style={
                                i === dotActive ?
                                    {
                                        padding: "10px",
                                        fontSize: "24px"
                                    }
                                    :
                                    {
                                        padding: "10px",
                                        display: "none"
                                    }}

                        >
                            0{i + 1}
                        </div>
                    ),
                }
            },

            {
                breakpoint: 1469,
                settings: {
                    dots: false
                }
            },
        ]
    };
    
    return (
        <Slider {...settings}>
            <Slide src='assets/images/home/index/03.png' />
            <Slide src='assets/images/home/index/02.png' />
            <Slide src='assets/images/home/index/01.png' />
        </Slider>
    )
}

export default Banner