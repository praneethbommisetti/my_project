import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
    const Navigate=useNavigate()
    const handleLogin=()=>{
        Navigate('/login')
    }
    const Submit=()=>{
        alert('Your device is hacked')
    }
  return (
    <div>
        <p><input type="text" placeholder='Enter email'></input></p>
        <p><input type="password" placeholder='Enter password'></input></p>
        <p><input type='number' placeholder='Enter OTP'></input></p>
        <p><input type='checkbox'></input>Yes,I agree to all the Terms and Conditions</p>
        <button onClick={Submit}>Submit</button>
        <p><button onClick={handleLogin}>Already a member? Login in</button></p>
    </div>
  )
}
