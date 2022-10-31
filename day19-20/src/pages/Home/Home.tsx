import React from 'react'
import pagesStyles from '../pages.module.css'
import styles from './home.module.css'


const { h1Wrapper } = pagesStyles
const { dayDemo, dayDemos } = styles

const Home = () => {
  return (
    <>
      <div className={h1Wrapper}>
        <h1>Welcome to Day 19-20 of 30 Days of React | Projects</h1>
        <button>
          TEST BUTTON
        </button>
      </div>

      <p>In this project we will try to somewhat recreate the intended project in this <a href="https://www.30daysofreact.com/day-19/cats">demo</a> by the author of 30 Days of React, <a href="https://github.com/Asabeneh">Asabeneh S. Yetayeh</a> </p>

      <div className={dayDemos}>
        <section className={dayDemo}>
          <h2>Day 19 demo reference</h2>
          <div>
            <p>General Info Showcase</p>
            <ul>
              <li>General Cat Image (React-Icons svg should suffice)</li>
              <li>There are &#123; number of cat breeds&#125;</li>
              <li>&#123; average weight &#125;</li>
              <li>&#123; average lifespan &#125;</li>
            </ul>
          </div>
          <div>
            <p>Individual Cat Breed Card</p>
            <ul>
              <li>Image</li>
              <li>Name</li>
              <li>Origin</li>
              <li>Temperament</li>
              <li>Life Span</li>
              <li>Weight -- metric</li>
              <li>Description</li>
            </ul>
          </div>
        </section>
        <section className={dayDemo}>
          <h2>Day 20 demo reference</h2>
          <div>
            <ul>
              <li>get all the breeds with the main URL</li>
              <li>get a user-input of cat to be searched</li>
              <li>--- try react router useParams</li>
              <li>display countries (origin) that have this cat breed</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}


export { Home }
