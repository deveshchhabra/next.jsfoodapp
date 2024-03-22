"use client"
import React, { useState } from 'react'
import RestaurantLogin from '../_components/restaurantLogin'
import RestaurantSignUp from '../_components/restaurantSignUp'
const page = () => {
    const [login,setLogin]=useState(true)
  return (
    <>
    <div className='container'>
    <h1>Restaurant Login/Sing-up</h1>
        
    {
        login?  <RestaurantLogin/>: <RestaurantSignUp/>
    }
  
   
    <button  className="button-link"onClick={()=>setLogin(!login)}>{login?"Donot have account":"Already have Account"}</button>
    </div>

    </>
  )
}

export default page