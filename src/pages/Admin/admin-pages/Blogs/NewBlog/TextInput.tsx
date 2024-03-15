const TextInput = ({
  label,
  placeholder,
  state,
}: {
  label: string
  placeholder: string
  state: any
}) => {
  return (
    <div className='flex flex-col gap-1 py-2'>
      <div className='text-sm poppins-regular text-gray-500'>
        {label} <span className='text-red-500'>*</span>
      </div>
      <input
        value={state[0]}
        onChange={(e) => state[1](e.target.value)}
        className='bg-gray-100 px-4 rounded py-2 outline-none'
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput
