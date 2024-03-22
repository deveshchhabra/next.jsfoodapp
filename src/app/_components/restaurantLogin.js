import React from 'react'

const restaurantLogin = () => {
  return (
    <>
    <h3>Login</h3>
    <div>
      <div className='input-wrapper'>
        <input type="text" placeholder='Enter Email id' className='input-field' />
      </div>
      <div className='input-wrapper'>
        <input type="password" className='input-field' placeholder='Enter Password' />
      </div>
      <div className='input-wrapper'>
      <button className='input-field'>Login</button>
      </div>
    </div>
    </>
  )
}

export default restaurantLogin