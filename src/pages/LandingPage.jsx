import React from 'react'
import '../styles/LandingPage.css'
import {doctorImage} from '../assets/images/Image'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='landing_page'>
        <section className="left">
          <h1 className="title">
            Health Mate
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum architecto laboriosam, cupiditate, omnis ullam quaerat voluptatum illo numquam inventore nesciunt eos aliquid consectetur deleniti odit at, sed iusto harum.
          </p>
        <button className='services_button'>
          <Link to='/services' className='linkservice'>Our Services</Link>
          </button>
        </section>
        <section className="right">
            <img src={doctorImage} alt="doctorimage" className='doctor_image'/>
        </section>
    </div>
  )
}

export default LandingPage