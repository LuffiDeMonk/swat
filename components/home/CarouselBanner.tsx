
import React from 'react'
import { SliderWrapper } from '../projects/ProjectSliderImport'
import BannerSlide from './BannerSlide'
import { BannerSlider as settings } from '@/settings/SliderConstant'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';
import Image from 'next/image';
import Subheading from './Subheading';
import Heading from './Heading';
import { Button } from '../ui/button';

export default function CarouselBanner() {
    return (
        <SliderWrapper {...settings}>
            <BannerSlide />
            <BannerSlide />
        </SliderWrapper>
    )
}
