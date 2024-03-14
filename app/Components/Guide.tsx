import React from 'react';
import travel from '../../public/guide.jpeg';
import Image from 'next/image';

const Guide = () => {
  return (
    <section className='p-4 lg:p-10 flex justify-center flex-col mt-60 lg:mt-16'>
      <div className='px-10'>
        <Image
          src="/travelGuide.png"
          alt="travelguide"
          width={80}
          height={50} 
        />
        <p className='lg:mx-2 font-light'>
          We are here for you!!
        </p>
        <div className='lg:flex'>
          <h1 className='lg:m-2 mt-2 font-bold text-3xl lg:text-4xl'>
            Guide You to Easy Path
          </h1>
          <p 
          className='lg:m-2 mt-2 lg:ml-28 lg:w-5/6'>
            Embark on your journey with confidence as we guide you through the intricate paths of travel. 
            From planning your itinerary to discovering hidden gems, we're here to make your 
            experience seamless and unforgettable.
            Let us be your compass as you explore the world's wonders and create lasting memories along the way.
          </p>
        </div>
      </div>
      <div className='relative'>
        <Image 
          className='w-screen p-6 lg:h-96 rounded-3xl'
          src={travel} 
          alt='guide'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
         <div className='absolute lg:inline-block hidden lg:mr-72 ml-4 '>
          <Image
            src="/direction.jpeg"
            alt="direction"
            width={120}
            height={300}>
            </Image>
          </div>
          <div className='bg-white py-8 lg:px-44 px-10 rounded-2xl shadow-md'>
            <div className='flex'>
            <p className='mx-4'>Destination</p>
            <p className=' text-orange-700'>52 min</p>
            </div>
              <p className='font-bold mx-4'>Mountain vally</p>
              <p className='mx-4 mt-10'>start Track</p>
              <p className='font-bold mx-4'>Area 83 Camp site</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide;
