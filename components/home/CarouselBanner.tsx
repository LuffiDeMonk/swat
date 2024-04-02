
import React from 'react'
import { SliderWrapper } from '../projects/ProjectSliderImport'
import BannerSlide from './BannerSlide'
import { BannerSlider as settings } from '@/settings/SliderConstant'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CarouselBanner() {
    return (
        <section id='home'>
            <SliderWrapper {...settings}>
                <BannerSlide />
                <BannerSlide />
            </SliderWrapper>
        </section>
    )
}
