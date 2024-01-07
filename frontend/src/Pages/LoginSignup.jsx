import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Créer un Compte</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Votre nom' />
          <input type="email" placeholder='votre email'/>
          <input type="password" placeholder='mot de passe' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">J'ai déja un compte <span>se connecter ici</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>Pour continuer accepter les termes et conditions</p>
        </div>
      </div>
    </div>
  )
}
