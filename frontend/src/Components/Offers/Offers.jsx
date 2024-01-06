import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Une Offre</h1>
        <h1>Exclusivement Pour Toi</h1>
        <p>UNIQUEMENT SUR NOS MEILLEURS VENTES</p>
        <button>Voir l'offre</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}
