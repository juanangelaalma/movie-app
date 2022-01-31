import React from 'react';

const BestArtists = () => {
  return (
    <div className="flex flex-col md:pr-0">
      <div className="flex justify-between w-full items-center pb-4">
        <h1 className="text-white text-lg font-bold">Best Artists</h1>
        <a className="text-gray-red hover:text-white text-light transition-all md:mr-6" href="#">More</a>
      </div>
      <div className="whitespace-nowrap pb-0 md:flex md:overflow-visible md:flex-wrap space-x-2 md:space-x-0 md:whitespace-pre-wrap w-full text-white max-h-25 overflow-x-scroll">
        <div className="w-40 h-52 md:w-1/5 md:h-32 lg:h-56 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn.kincir.com/2/socCzrm-VupyK4n4ygE5Jsa7bN7P7KVTHsna1r7dP4c/transform/rs:fit:764/src/production/2020-05/680x451_790919acba2b96527780120c60398f9a01fab270.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex flex-col absolute w-full bottom-0 left-0 h-14 md:h-11 lg:h-16">
              <h1 className='mx-auto text-sm md:text-xs'>Vin Diesel</h1>
              <p className='text-gold mx-auto font-light md:text-xs lg:text-lg'>24 Movies</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-1/5 md:h-32 lg:h-56 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn.kincir.com/2/mlw8PYwX2uWVrHyuBdi-Jm46DLK6LF6olJLqNG8bSxw/transform/rs:fit:764/src/production/2020-05/640x480_8eaa1407d4e042ee193ab352e8e4fe68327a5c9f.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex flex-col absolute w-full bottom-0 left-0 h-14 md:h-11 lg:h-16">
              <h1 className='mx-auto text-sm md:text-xs'>Iko Uwais</h1>
              <p className='text-gold mx-auto font-light md:text-xs lg:text-lg'>24 Movies</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-1/5 md:h-32 lg:h-56 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn.kincir.com/2/Xe19m6qxfd71xIiWYIhaV87eFbiPdAz5cEya2LBRQyc/transform/rs:fit:764/src/production/2020-05/679x452_5eaf371e88605578e7b28f0b56817b7318aa4955.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex flex-col absolute w-full bottom-0 left-0 h-14 md:h-11 lg:h-16">
              <h1 className='mx-auto text-sm md:text-xs'>Tom Cruise</h1>
              <p className='text-gold mx-auto font-light md:text-xs lg:text-lg'>24 Movies</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-1/5 md:h-32 lg:h-56 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn.kincir.com/2/FecuD8Zx13nofXoP--23ncOpR2XlDcZeqpf7ljFS7sE/transform/rs:fit:764/src/production/2020-05/678x452_be64d2c64f281380a9e97c5cdf9cd4b74ca18bd7.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex flex-col absolute w-full bottom-0 left-0 h-14 md:h-11 lg:h-16">
              <h1 className='mx-auto text-sm md:text-xs'>Steven Seagal</h1>
              <p className='text-gold mx-auto font-light md:text-xs lg:text-lg'>24 Movies</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-1/5 md:h-32 lg:h-56 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn.kincir.com/2/_Mcb94tnF1Xpwmoh9H-9vdEeomy8AOwuCXRLO9ob6Nc/transform/rs:fit:764/src/production/2020-05/678x452_a9ca92a30fb986dab9ba7334f9672df5112955e2.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex flex-col absolute w-full bottom-0 left-0 h-14 md:h-11 lg:h-16">
              <h1 className='mx-auto text-sm md:text-xs'>Jason Statham</h1>
              <p className='text-gold mx-auto font-light md:text-xs lg:text-lg'>24 Movies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArtists;
