import React from 'react'
import './NewLetter.css'
export const NewLetter = () => {
  return (
    <div className='newletter'>
        <h1>Recois Nos Offres Exclusives par Email</h1>
        <p>S'abonner à la NewLetter</p>
        <div>
            <input type="email" placeholder=' Votre email...' />
            <button>S'abonner</button>
        </div>
    </div>
  )
}
