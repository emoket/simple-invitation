import React, { useState } from 'react';
import './Photo.css';
import LazyLoad from 'react-lazy-load';

const PHOTO_COUNT = 6;
const DEGREE_RANGE = 10;

const Photo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className='section__photo' id='photo'>
      {/* Photo Stack */}
      {Array.from({ length: PHOTO_COUNT }, (_, i) => {
        return (
          <div className='stack__photo' key={i}>
            <LazyLoad
              height={600}
              offset={700}
              className={`lazy-load ${isLoaded ? 'is-visible' : ''}`}
              onContentVisible={() => setIsLoaded(true)}
            >
              <img
                src={`/images/photo_${i + 1}.jpg`}
                alt='my son'
                style={{
                  transform: `rotate(${
                    i % 2 === 0
                      ? Math.round(Math.random() * DEGREE_RANGE)
                      : Math.round(Math.random() * DEGREE_RANGE) * -1
                  }deg)`,
                }}
              />
            </LazyLoad>
          </div>
        );
      })}
    </section>
  );
};

export default Photo;
