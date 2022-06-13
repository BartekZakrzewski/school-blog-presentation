import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn arrow-btn-l left-0 text-center py-3 cursor-pointer bg-purple-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="48" width="48">
        <path d="M26.95 34.9 17.05 25Q16.8 24.75 16.7 24.5Q16.6 24.25 16.6 23.95Q16.6 23.65 16.7 23.4Q16.8 23.15 17.05 22.9L27 12.95Q27.45 12.5 28.075 12.5Q28.7 12.5 29.15 12.95Q29.6 13.4 29.575 14.05Q29.55 14.7 29.1 15.15L20.3 23.95L29.15 32.8Q29.6 33.25 29.6 33.85Q29.6 34.45 29.15 34.9Q28.7 35.35 28.05 35.35Q27.4 35.35 26.95 34.9Z"/>
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn arrow-btn-r right-0 text-center py-3 cursor-pointer bg-purple-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="48" width="48">
        <path d="M17.7 34.9Q17.3 34.4 17.275 33.8Q17.25 33.2 17.7 32.75L26.5 23.95L17.65 15.1Q17.25 14.7 17.275 14.025Q17.3 13.35 17.7 12.95Q18.2 12.45 18.775 12.475Q19.35 12.5 19.8 12.95L29.75 22.9Q30 23.15 30.1 23.4Q30.2 23.65 30.2 23.95Q30.2 24.25 30.1 24.5Q30 24.75 29.75 25L19.85 34.9Q19.4 35.35 18.8 35.325Q18.2 35.3 17.7 34.9Z"/>
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
        {dataLoaded && featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
