import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
    {title}
  </button>
  )
}

export default Button