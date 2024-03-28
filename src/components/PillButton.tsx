import React from 'react'

type PillButtonType = {
  size?: 'normal' | 'large'
  text: string
  outline?: boolean
  onClick?: () => void
  type?: 'submit'
  disabled?: boolean
  color?: 'white'
}

const PrimaryButton: React.FC<PillButtonType> = ({
  size,
  text,
  outline,
  onClick,
  type,
  disabled,
  color,
}) => {
  return (
    <>
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className={`${size === 'large' ? 'p-3' : 'text-sm px-7 py-3'} ${
          outline
            ? 'border border-blue-600 text-blue-600'
            : `${
                color ? 'bg-' + color + ' text-black' : 'bg-blue-600'
              } hover:bg-blue-500`
        }  font-semibold hover:scale-105 transition duration-300 capitalize rounded-full poppins-semibold text-sm disabled:opacity-35 disabled:cursor-not-allowed z-10`}
      >
        {text}
      </button>
    </>
  )
}

export default PrimaryButton
