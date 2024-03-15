import { useState } from 'react'
import TextInput from './TextInput'

const ContentForm = () => {
  const [title, setTitle] = useState('')

  return (
    <div className='py-4 px-7 bg-white border shadow-sm rounded-lg grid grid-cols-2 gap-5'>
      <div>
        <TextInput
          label='Title'
          placeholder='This is my blog'
          state={[title, setTitle]}
        />
        <TextInput
          label='Title'
          placeholder='This is my blog'
          state={[title, setTitle]}
        />
        <TextInput
          label='Title'
          placeholder='This is my blog'
          state={[title, setTitle]}
        />
      </div>

      <div>
        <TextInput
          label='Title'
          placeholder='This is my blog'
          state={[title, setTitle]}
        />
      </div>
    </div>
  )
}

export default ContentForm
