import { CampImage } from "../Constants/Index"

const Camp = () => {
  return (
    <div className='p-4 lg:p-8 relative'>
      <div className="absolute lg:top-10 lg:left-2/4 mt-72 lg:mt-28 z-10 flex justify-end px-4">
        <div className="p-8 bg-orange-700 lg:w-96 w-full relative overflow-hidden rounded-3xl">
          <h2 className="p-2 text-2xl text-white">
            <strong className="mr-2">Lost ?</strong>
            Find your path to adventure here.
          </h2>
          <p className="m-2 text-purple-950">
          Escape to nature's embrace at our tranquil campsite.
          Surrounded by breathtaking scenery,
          unwind under the stars and reconnect with the wilderness
          </p>
        </div>
        </div>
      <div className='overflow-hidden'>
        <div className='flex items-start gap-8 overflow-x-auto custom-scrollbar lg:px-10'>
          {CampImage.map((camp) => (
            <img key={camp.id} src={camp.img} alt={`Camp Image ${camp.id}`} 
            className="h-64 lg:w-4/5 w-3/4 rounded-lg text-black" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Camp
