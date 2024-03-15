const CheckboxInput = ({
  label,
  boolState,
}: {
  label: string
  boolState: any
}) => {
  return (
    <div className='flex gap-2 py-2'>
      <input
        checked={boolState[0]}
        onChange={() => boolState[1](!boolState[0])}
        type='checkbox'
      />
      <div className='text-sm poppins-regular text-gray-500'>{label}</div>
    </div>
  )
}

export default CheckboxInput
