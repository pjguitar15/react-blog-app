import 'react-quill/dist/quill.snow.css'

const ContentForm = () => {
  return (
    <div className='py-4 px-7 bg-white border shadow-sm rounded-lg'>
      <h1>Hello World</h1>
      {/* <div>
        <div className='text-sm poppins-regular text-gray-500 mb-1'>
          Main Body <span className='text-red-500'>*</span>
        </div>
        <ReactQuill theme='snow' value={content} onChange={setContent} />
      </div> */}
    </div>
  )
}

export default ContentForm
