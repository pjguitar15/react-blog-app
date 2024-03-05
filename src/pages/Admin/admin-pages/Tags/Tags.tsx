import { useState } from 'react'
import DisplayTags from './DisplayTags'
import AddTags from './AddTags'

const Categories = () => {
  const [mode, setMode] = useState('read')

  return (
    <>
      {mode === 'read' ? (
        <DisplayTags setMode={setMode} />
      ) : (
        <AddTags setMode={setMode} />
      )}
    </>
  )
}

export default Categories
