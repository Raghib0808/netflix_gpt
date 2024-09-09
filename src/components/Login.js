import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [Sign,Setsign]=useState(false)
    const signuptoggler=()=>{
            Setsign(!Sign)
    }


  return (
    <div className=''>
      <Header/>
      <div className='absolute'>

      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"/>
      </div>
   
        <form className='text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl mb-4'>{Sign?"Sign-In":"Sign-Up"}</h1>

            {Sign&&<input type='password' placeholder='Name' className='p-4 my-4 w-full text-black'/>}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full text-black'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full text-black'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-black'>{Sign?"Sign-In":"Sign-Up"}</button>

            <p className='py-4 cursor-pointer' onClick={signuptoggler}>{Sign?"New to Netflix? SignUp Now":"Already registered? Sign In Now!"}</p>

        </form>
   
   
   
    </div>



  )
}

export default Login
