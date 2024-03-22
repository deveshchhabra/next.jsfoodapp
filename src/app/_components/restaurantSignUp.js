import React from 'react'

const restaurantSignUp = () => {
  return (
    <>
    <h3>Sing-up</h3>
    <div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Enter Email id' className='input-field' />
      </div>
      <div className='input-wrapper'>
        <input type="password" className='input-field' placeholder='Enter Password' />
      </div>
      <div className='input-wrapper'>
        <input type="password" className='input-field' placeholder='Confirm Password' />
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Enter Restaurant Name' className='input-field' />
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Enter city' className='input-field' />
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Location' className='input-field' />
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Contact' className='input-field' />
      </div>
      <div className='input-wrapper'>
      <button className='button'>Sign-up</button>
      </div>
    </div>
    </>
  )
}

export default restaurantSignUp