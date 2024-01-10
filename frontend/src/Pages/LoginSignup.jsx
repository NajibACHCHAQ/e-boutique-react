import React, { useState } from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  const [state, setState]= useState("Se connecter");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () =>{
    console.log("login executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData = data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  const signup = async () =>{
    console.log("signup executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((resp)=>resp.json()).then((data)=>responseData = data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state ==="S'enregistrer"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Votre nom' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='votre email'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='mot de passe' />
        </div>
        <button onClick={()=>{state === "Se connecter"?login():signup()}}>Continue</button>
        {state === "S'enregistrer"
        ?<p className="loginsignup-login">J'ai déja un compte <span onClick={()=>{setState("Se connecter")}}>Se connecter</span></p>
      :<p className="loginsignup-login">Créer un compte ? <span onClick={()=>{setState("S'enregistrer")}}>Cliquez ici</span></p>}       
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>Pour continuer accepter les termes et conditions</p>
        </div>
      </div>
    </div>
  )
}
