import React from 'react';
import { featureImage } from '../Constants/Index';

const Features = () => {
  return (
    <section className='px-13 flex'>
      <div>
        <img
          className='p-2 ml-12 w-96 h-96 hidden lg:inline-block rounded-2xl' 
          src={featureImage} 
          alt='image' 
        />
      </div>
      <div>
        <h1 className='p-2 mx-8 lg:ml-44 font-bold text-3xl'>FEATURES</h1>
        <ul className="mx-8 mt-4 lg:ml-44">
        <li className="mb-4">
            <span className="font-bold">1. Trip Planning:</span> Plan your trips efficiently by adding destinations, activities, and accommodations to your itinerary.
          </li>
          <li className="mb-4">
            <span className="font-bold">2. Destination Guides:</span> Access comprehensive guides for various destinations, including information on attractions, restaurants, and local customs.
          </li>
          <li className="mb-4">
            <span className="font-bold">3. Real-time Updates:</span> Receive real-time updates on flight statuses, weather conditions, and travel advisories to stay informed throughout your journey.
          </li>
          <li className="mb-4">
            <span className="font-bold">4. Travel Journal:</span> Document your travel experiences through photos, notes, and memories, and share them with friends and family.
          </li>
          <li className="mb-4">
            <span className="font-bold">5. Offline Access:</span> Access essential travel information and maps even when you're offline, ensuring you're never lost in unfamiliar territory.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
