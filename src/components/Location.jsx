import React from 'react';
import './Location.css';
import cafeImage from '../assets/boda658.jpg';
import { HiOutlineMapPin } from 'react-icons/hi2';

const Location = () => {
  return (
    <section className='location__container' id='location'>
      <div>
        <h2 className='section__title'>Boda658</h2>
        <span className='section__subtitle'>
          경기 광주시 초월읍 현산안길 34 (우)12728
          <br />
          (경기 광주시 초월읍 지월리 658-1)
        </span>
      </div>

      {/* Map Image */}
      <div className='location__wrapper'>
        <img src={cafeImage} alt='카페이미지' className='location__img' />
      </div>

      {/* Navigation Link */}
      <div className='location-button-group-wrapper'>
        <div className='button-group'>
          <a
            href='https://naver.me/xtWvjTGI'
            target='_blank'
            rel='noreferrer'
            className='button button-primary button--flex'
          >
            네이버지도
            <HiOutlineMapPin className='button--flex--icon' />
          </a>

          <a
            href='https://place.map.kakao.com/254406486'
            target='_blank'
            rel='noreferrer'
            className='button button-reverse button--flex'
          >
            카카오지도
            <HiOutlineMapPin className='button--flex--icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
