import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import jordan_image from '../Assets/jordan.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Nouveaux Arrivages</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>La nouvelle</p>
                    <img src={hand_icon}alt="" />
                </div>
                <p>collection</p>
                <p>est enfin arrivée</p>
            </div>
            <div className="hero-latest-btn">
                <div>Découvrir</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={jordan_image} alt="" />
        </div>
    </div>
  )
}
