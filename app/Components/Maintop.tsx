import Image from 'next/image'
import React from 'react'

const Maintop = () => {
  return (
    <section className='flex p-4 lg:p-8'>
      <div className='lg:flex'>
        <div className='mx-6 mt-3'>
          <h1 className='font-bold text-2xl'>Adventure Calls. Answer Now.</h1>
          <p className='mt-4 xl:max-w[520px]'>Introducing our innovative travel app project, designed to revolutionize the way you explore the world.
          With intuitive features for seamless trip planning, real-time updates, and personalized recommendations,
          embark on unforgettable journeys with confidence.
          </p>
          <div className='my-8 flex flex-wrap gap-2'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_,index)=>(
                <Image
                  src="/star.jpeg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>
            <p className='font-bold'>
              199K
              <span className='mx-2 font-normal underline'>Excellent Reviews</span>
            </p>
          </div>
          <div className='my-3 flex'>
            <button className='p-3 hover:bg-purple-800 text-white bg-purple-700 rounded-full'>
              Download App
            </button>
            <button className='p-3 mx-3 rounded-full bg-slate-300'>
              ▶️ how we work?
            </button>
          </div>
        </div>
        <div className='relative mt-4 mx-4'>
          <img
            src="/home.jpeg"
            alt="home"
            className='w-screen'
          />
          <div className='absolute inset-0 flex mt-28 items-start'>
            <div className='w-[268px] py-8 px-7 rounded-3xl flex-col gap-8 bg-slate-950'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <p className='text-white'>Location</p>
                    <span>✖️</span>
                  </div>
                </div>
                <p className='text-white font-bold'>Mountain View Retreat</p>
                <div className='flex justify-between mt-4'>
                <div className='flex flex-col'>
                  <p className='text-white'>Distance</p>
                  <span className='text-white font-bold'>123.67 mi</span>
                </div>
                <div className='flex flex-col'>
                  <p className='text-white'>Elevation</p>
                  <span className='text-white font-bold'>13 Km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maintop
