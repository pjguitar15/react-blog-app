type AlertType = {
  type: 'success' | 'danger' | 'warning'
  text: string
}

const Alert = ({ type, text }: AlertType) => {
  let alertClassName = ''
  if (type === 'success') {
    alertClassName = 'bg-green-100 text-green-900'
  } else if (type === 'danger') {
    alertClassName = 'bg-red-100 text-red-900'
  } else if (type === 'warning') {
    alertClassName = 'bg-yellow-100 text-yellow-900'
  }
  return (
    <>
      {text && (
        <div
          className={`px-4 py-2 ${alertClassName} rounded-md poppins-regular text-sm me-auto`}
        >
          {text}
        </div>
      )}
    </>
  )
}

export default Alert
