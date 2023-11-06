import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, text, image } = people[index]

  const handlePrev = () => {
    setIndex(index => {
      if (index <= 0) return people.length - 1

      const newIndex = index - 1
      return newIndex
    })
  }

  const handleNext = () => {
    setIndex(index => {
      if (index === people.length - 1) return 0

      const newIndex = index + 1
      return newIndex
    })
  }

  const handleRandom = () => {
    setIndex(index => {
      let randomNum = Math.floor(Math.random() * people.length)
      if (randomNum === index) randomNum = randomNum + 1

      if (randomNum > people.length - 1) return 0

      return randomNum
    })
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
