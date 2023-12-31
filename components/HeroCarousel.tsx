"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
  { imgUrl: '/assets/images/hero-1.png', alt: 'person with shopping bags' },
  { imgUrl: '/assets/images/hero-2.png', alt: 'shirt' },
  { imgUrl: '/assets/images/hero-3.png', alt: 'bag' },
  { imgUrl: '/assets/images/hero-4.png', alt: 'chair' },
  { imgUrl: '/assets/images/hero-5.png', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-6.png', alt: 'watch' },
]

// Carousel section in homepage
const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className='object-contain'
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src='/assets/icons/hand-drawn-arrow.svg'
        alt='directive arrow'
        width={175}
        height={175}
        className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
      />
    </div>
  )
}

export default HeroCarousel;
