import { useEffect, useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const SuccessModal = () => {
  const [closeTimeoutValue, setCloseTimeoutValue] = useState(2)
  const [showModal, setShowModal] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const id = setInterval(() => {
      setCloseTimeoutValue((prev) => {
        if (prev > 0) {
          return prev - 1
        } else {
          navigate('/admin')
          setShowModal(false)
          clearInterval(id)
          return 0
        }
      })
    }, 1000)

    // Clear the interval when the component is unmounted
    return () => clearInterval(id)
  }, [])
  return (
    <>
      {showModal && (
        <div className='absolute w-full h-full z-50 inset-0'>
          <div className='absolute inset-0 bg-black opacity-85 w-full h-full'></div>
          <div className='absolute inset-0 top-8 mx-auto my-auto w-1/2 rounded overflow-hidden'>
            <div className='bg-green-500 p-6'>
              <h2 className='text-center text-white'>
                <CiCircleCheck className='text-7xl mx-auto' />
              </h2>
            </div>
            <div className='bg-white p-8'>
              <h2 className='text-center text-slate-700 text-2xl'>
                Successfully logged in!
              </h2>
              <p className='text-slate-400 text-center text-sm mt-2'>
                window closing in {closeTimeoutValue + 1}...
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessModal
