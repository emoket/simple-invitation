import React from 'react';
import './Home.css';
import { HiOutlineMap, HiOutlinePhoto } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const contentsVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const eachVariants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Home = () => {
  return (
    <section className='section' id='home'>
      <div className='home__container container'>
        <div className='home__content'>
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              delay: 1,
            }}
            className='home__img'
          ></motion.div>

          {/* Text Contents */}
          <motion.div
            variants={contentsVariants}
            initial='start'
            animate='end'
            className='home__text-block'
          >
            <motion.h1 variants={eachVariants} className='home__title'>
              태오의
              <br />첫 돌잔치 <span className='home__palm'>👋🏻</span>
            </motion.h1>

            <motion.h2 variants={eachVariants} className='home__subtitle'>
              9.17 (일) 오전 11시, <a href='#location'>Boda658</a>
            </motion.h2>

            <motion.div variants={eachVariants} className='button-group'>
              <a
                href='#location'
                className='button button-primary button--flex'
              >
                위치보기
                <HiOutlineMap className='button--flex--icon' />
              </a>

              <a href='#about' className='button button-reverse button--flex'>
                사진보기
                <HiOutlinePhoto className='button--flex--icon' />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
