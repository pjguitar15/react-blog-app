import { useState } from 'react'
import DisplayCategories from './DisplayCategories'
import AddCategories from './AddCategories'

const Categories = () => {
  const [mode, setMode] = useState('read')

  return (
    <>
      {mode === 'read' ? (
        <DisplayCategories setMode={setMode} />
      ) : (
        <AddCategories setMode={setMode} />
      )}
    </>
  )
}

export default Categories
