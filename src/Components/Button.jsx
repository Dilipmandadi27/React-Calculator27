import React from 'react'

const Button = ({resetbtn}) => {
  return (
    <div>
     <button className='resetbtn' onClick={resetbtn}>Reset</button>
    </div>
  )
}

export default Button
