import { useRef, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import 'react-quill/dist/quill.snow.css'

const hoverScale = 'hover:scale-105 transition duration-300'

type ContentDataType = {
  content: string | null
  type: string
}

const ContentForm = () => {
  const [contentData, setContentData] = useState<ContentDataType[]>([])
  const contentParentRef = useRef<HTMLDivElement>(null)

  const addContentType = (type: string) => {
    const newContentData = [...contentData, { content: 'Sample Content', type }]
    setContentData(newContentData)
  }

  return (
    <main>
      <h2 className='text-md poppins-regular mb-3 mt-4 text-slate-500'>
        Edit your content here
      </h2>
      <div className='pb-[60px] relative xl:w-3/4'>
        <div
          id='test'
          ref={contentParentRef}
          className='flex flex-col gap-3 bg-white pb-4 pt-3 px-2 shadow rounded-lg'
        >
          <h2
            suppressContentEditableWarning={true}
            contentEditable
            className={`text-lg poppins-medium text-slate-700 py-2 ps-5 pe-12 rounded-md outline-none relative group hover:bg-slate-100`}
          >
            Sample Heading Content
            <button
              onClick={() => console.log('test')}
              className='absolute right-4 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl poppins-regular'
            >
              ×
            </button>
          </h2>
          <p
            suppressContentEditableWarning={true}
            contentEditable
            className={`poppins-regular text-slate-500 text-sm leading-loose outline-none py-2 ps-5 pe-12 h-auto resize-none group relative hover:bg-slate-100 rounded-md`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            unde reprehenderit, recusandae, doloribus voluptas necessitatibus ut
            cum asperiores cupiditate beatae fuga perferendis ipsam, natus
            distinctio in consequatur obcaecati? Neque, ullam? lorem
            <button className='absolute right-3 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl'>
              ×
            </button>
          </p>
          {contentData.map((item, index) => (
            <ContentItem key={index} type={item.type} />
          ))}
          <hr className='w-3/4 mx-auto' />
          <AddButton addContentType={addContentType} />
        </div>
        <button
          onClick={() => {
            console.log(contentData)
          }}
          className='bg-blue-500 mx-auto px-3 py-1 rounded text-white'
        >
          Check
        </button>
      </div>
    </main>
  )
}

const ContentItem = ({ type }: { type: string }) => {
  const [headingContent, setHeadingContent] = useState(
    'This is a Heading Content'
  )
  return (
    <>
      {type === 'heading' && (
        <h2
          suppressContentEditableWarning={true}
          contentEditable
          className={`text-lg poppins-medium text-slate-700 py-2 ps-5 pe-12 rounded-md outline-none relative group hover:bg-slate-100`}
        >
          {headingContent}
          <button
            onClick={() => console.log('test')}
            className='absolute right-4 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl poppins-regular'
          >
            ×
          </button>
        </h2>
      )}
      {type === 'paragraph' && (
        <p
          suppressContentEditableWarning={true}
          contentEditable
          className={`poppins-regular text-slate-500 text-sm leading-loose outline-none py-2 ps-5 pe-12 h-auto resize-none group relative hover:bg-slate-100 rounded-md`}
        >
          {headingContent}
          <button className='absolute right-3 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl'>
            ×
          </button>
        </p>
      )}
    </>
  )
}

const AddButton = ({ addContentType }: { addContentType: any }) => {
  return (
    <div className='border p-3 bg-none w-1/2 mx-auto mt-3 bg-blue-100 flex gap-2 justify-center border-dashed border-blue-300 poppins-regular rounded-lg text-sm'>
      <div
        className={`p-3 bg-blue-200 rounded-lg w-full flex gap-1 items-center justify-center text-blue-900 cursor-pointer ${hoverScale}`}
        onClick={() => addContentType('heading')}
      >
        <GoPlus />
        Heading
      </div>
      <div
        className={`p-3 bg-blue-200 rounded-lg w-full flex gap-1 items-center justify-center text-blue-900 cursor-pointer ${hoverScale}`}
        onClick={() => addContentType('paragraph')}
      >
        <GoPlus />
        Paragraph
      </div>
      <div
        className={`p-3 bg-blue-200 rounded-lg w-full flex gap-1 items-center justify-center text-blue-900 cursor-pointer ${hoverScale}`}
        onClick={() => addContentType('image')}
      >
        <GoPlus />
        Image
      </div>
    </div>
  )
}

export default ContentForm
