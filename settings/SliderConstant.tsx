import { Settings } from "react-slick";

export const ProjectSlider: Settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
}

export const TestimonySlider: Settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '150px'
            }
        }
    ]
}