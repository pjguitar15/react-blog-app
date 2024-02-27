import React from 'react'

type PrimaryButtonType = {
  size?: 'normal' | 'large'
  text: string
  outline?: boolean
  onClick?: () => void
  type?: 'submit'
  disabled?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonType> = ({
  size,
  text,
  outline,
  onClick,
  type,
  disabled,
}) => {
  return (
    <>
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className={`${size === 'large' ? 'p-3' : 'text-sm px-4 py-2'} ${
          outline
            ? 'border border-violet-600 text-violet-600'
            : 'bg-violet-600 hover:bg-violet-500 text-white'
        }  font-semibold hover:scale-105 transition duration-300 capitalize rounded poppins-regular text-sm disabled:opacity-35 disabled:cursor-not-allowed`}
      >
        {text}
      </button>
    </>
  )
}

export default PrimaryButton
