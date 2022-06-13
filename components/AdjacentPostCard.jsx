import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white text-shadow font-semibold text-2xl text-center">{post.title}</p>
    </div>
    <Link href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-full" /></Link>
    {position === 'LEFT' && (
      <div className="absolute arrow-btn arrow-btn-l bottom-5 text-center py-3 cursor-pointer bg-purple-500 left-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="48" width="48">
          <path d="M26.95 34.9 17.05 25Q16.8 24.75 16.7 24.5Q16.6 24.25 16.6 23.95Q16.6 23.65 16.7 23.4Q16.8 23.15 17.05 22.9L27 12.95Q27.45 12.5 28.075 12.5Q28.7 12.5 29.15 12.95Q29.6 13.4 29.575 14.05Q29.55 14.7 29.1 15.15L20.3 23.95L29.15 32.8Q29.6 33.25 29.6 33.85Q29.6 34.45 29.15 34.9Q28.7 35.35 28.05 35.35Q27.4 35.35 26.95 34.9Z"/>
        </svg>
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="absolute arrow-btn arrow-btn-r bottom-5 text-center py-3 cursor-pointer bg-purple-500 right-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="48" width="48">
          <path d="M17.7 34.9Q17.3 34.4 17.275 33.8Q17.25 33.2 17.7 32.75L26.5 23.95L17.65 15.1Q17.25 14.7 17.275 14.025Q17.3 13.35 17.7 12.95Q18.2 12.45 18.775 12.475Q19.35 12.5 19.8 12.95L29.75 22.9Q30 23.15 30.1 23.4Q30.2 23.65 30.2 23.95Q30.2 24.25 30.1 24.5Q30 24.75 29.75 25L19.85 34.9Q19.4 35.35 18.8 35.325Q18.2 35.3 17.7 34.9Z"/>
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
