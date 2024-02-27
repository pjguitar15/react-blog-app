import React from 'react'

type PrimaryButtonType = {
  size?: 'normal' | 'large'
  text: string
}

const PrimaryButton: React.FC<PrimaryButtonType> = ({ size, text }) => {
  return (
    <>
      <button
        className={`${
          size === 'large' ? 'p-3' : 'text-sm px-4 py-2'
        } bg-violet-600 hover:bg-violet-500 rounded text-white font-semibold hover:scale-105 transition duration-300 capitalize`}
      >
        {text}
      </button>
    </>
  )
}

export default PrimaryButton
