import React from 'react'
import "./about.css"
import Review from './Review';
import ReviewAviyonik from './ReviewAviyonik';
import ReviewYazilim from './ReviewYazilim';

const About = () => {
  return (
    <div className='container-for-content'>
      <div className='review-title'>
        <h2>Our Reviews</h2>
      </div>
      <div className='review-row'>
        <Review />
        <ReviewAviyonik />
        <ReviewYazilim />
        <ReviewAviyonik />
        <ReviewYazilim />
      </div>
    </div>
  )
}

export default About