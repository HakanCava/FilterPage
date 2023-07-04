import React from 'react'
import { useSelectContext } from '../../context/SelectContext'
import './filter.css'

const Button = () => {
    const {handleClear,handleSearch} = useSelectContext()
  return (
    <div className='button'>
        <button onClick={handleSearch} className='btn1'>Search</button>
      <button onClick={handleClear} className='btn2'>Clear</button>
    </div>
  )
}

export default Button