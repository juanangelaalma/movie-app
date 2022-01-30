import React from 'react';

const Banner = () => {
  return (
    <div className='w-full h-40 md:h-60 w-full bg-orange-600 overflow-hidden rounded-xl relative'>
      <img src="https://cdn2.geeq.id/media/post/medium/5863-ada-hulkbuster-di-poster-baru-avengers-end-game-begini-penampakannya.jpg" className='w-full h-full object-cover object-center' alt="Banner" />
      <button className="px-4 py-2 absolute bottom-4 right-4 rounded-lg bg-orange hover:bg-orange-hover text-white font-bold">Watch now</button>
    </div>
  )
};

export default Banner;
