import React from 'react'
import logo from '../../image/logo.png'
import './logo.css'
export default function LogoComponent() {
  return (
    <div className='container-logo'> 
        <div className='logo-icon'>
            <img src={logo}/>
        </div>
        <div className='logo-name'>
            <p>Vkinsta</p>
        </div>
    </div>
  )
}
