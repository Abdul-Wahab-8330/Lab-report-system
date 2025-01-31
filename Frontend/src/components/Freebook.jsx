import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {

  const filterData = list.filter((data) => data.category === 'Free')
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <>
      <div className='mt-12 max-w-screen-2xl container mx-auto md:px-20 px-8 '>
        <h1 className='font-semibold text-xl pb-3'>Free Offered Courses</h1>
        <p>This section offers an extensive collection of free books to help you learn and grow. For an even more engaging and in-depth experience, we invite you to explore our premium paid courses. Dive in and make the most of these resources today!</p>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => {
              return <Cards item={item} key={item.id} />
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
