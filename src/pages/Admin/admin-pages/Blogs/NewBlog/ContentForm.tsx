import { SetStateAction, useEffect, useRef, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import 'react-quill/dist/quill.snow.css'
import { useBlogContext } from '../../../../../Context/BlogContext'
import DeleteConfirmModal from '../../../../../components/DeleteConfirmModal'
import { Reorder } from 'framer-motion'

const hoverScale = 'hover:scale-105 transition duration-300'

export type ContentDataType = {
  id: string
  content: any
  type: string
}

const ContentForm = () => {
  const [selectedDeleteId, setSelectedDeleteId] = useState<string>('')
  const [open, setOpen] = useState(false)
  const contentParentRef = useRef<HTMLDivElement>(null)
  const { contentData, setContentData } = useBlogContext()

  useEffect(() => {
    if (selectedDeleteId) setOpen(true)
  }, [selectedDeleteId])

  const addContentType = (type: string) => {
    let newContent: string | File
    if (type === 'heading' || type === 'paragraph') {
      if (type === 'heading') {
        newContent = 'Please edit this heading'
      } else {
        newContent =
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.'
      }
    } else if (type === 'image') {
      newContent = '' // Set newContent to empty string for image
    } else {
      throw new Error('Unsupported content type')
    }

    const newContentData = [
      ...contentData,
      { id: generateUniqueId(), content: newContent, type },
    ]
    setContentData(newContentData)
  }

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9)
  }

  const deleteHandler = () => {
    const filter = contentData.filter(
      (item: any) => item.id !== selectedDeleteId
    )
    setContentData(filter)
    console.log(`Deleting ID: ${selectedDeleteId}`)
    setOpen(false)
  }

  return (
    <main>
      <DeleteConfirmModal
        open={open}
        setOpen={setOpen}
        deleteHandler={deleteHandler}
        message={`Are you sure you want to remove this content item?`}
        title={`Delete Confirmation`}
      />
      <h2 className='text-md poppins-regular mb-3 mt-4 text-slate-500'>
        Edit your content here
      </h2>
      <div className='pb-[60px] relative xl:w-3/4'>
        <Reorder.Group
          axis='y'
          values={contentData}
          onReorder={setContentData}
          id='test'
          ref={contentParentRef}
          className='flex flex-col gap-3 bg-white pb-4 pt-3 px-2 shadow rounded-lg'
        >
          {contentData.map((item: any, index: number) => (
            <Reorder.Item className='relative' value={item}>
              <div className='absolute left-0 top-0 h-full w-6 px-1 bg-blue-200 z-10 rounded-tl-lg rounded-bl-lg flex items-center justify-center cursor-pointer'>
                <div className='flex flex-col gap-1 items-center'>
                  <div className='flex justify-center w-full'>
                    <div className='size-1 rounded-full bg-blue-400' />
                    <div className='size-1 rounded-full bg-blue-400 ms-1' />
                  </div>
                  <div className='flex justify-center w-full'>
                    <div className='size-1 rounded-full bg-blue-400' />
                    <div className='size-1 rounded-full bg-blue-400 ms-1' />
                  </div>
                  <div className='flex justify-center w-full'>
                    <div className='size-1 rounded-full bg-blue-400' />
                    <div className='size-1 rounded-full bg-blue-400 ms-1' />
                  </div>
                  <div className='flex justify-center w-full'>
                    <div className='size-1 rounded-full bg-blue-400' />
                    <div className='size-1 rounded-full bg-blue-400 ms-1' />
                  </div>
                </div>
              </div>
              <ContentItem
                key={item.id}
                item={item}
                setContent={(newContent: string | File) => {
                  const updatedContentData = [...contentData]
                  updatedContentData[index].content = newContent
                  setContentData(updatedContentData)
                }}
                setSelectedDeleteId={setSelectedDeleteId}
              />
            </Reorder.Item>
          ))}
          <hr className='w-3/4 mx-auto' />
          <AddButton addContentType={addContentType} />
        </Reorder.Group>
      </div>
    </main>
  )
}

const ContentItem = ({
  item,
  setContent,
  setSelectedDeleteId,
}: {
  item: ContentDataType
  setContent: (newContent: string | File) => void
  setSelectedDeleteId: React.Dispatch<SetStateAction<string>>
}) => {
  return (
    <>
      {item.type === 'heading' && (
        <div className='relative group hover:bg-slate-100 py-2 ps-10 pe-12'>
          <input
            onChange={(e) => setContent(e.target.value)}
            className={`text-lg poppins-medium text-slate-700 rounded-md outline-none w-full bg-transparent`}
            value={item.content as string}
          />
          <button
            onClick={() => {
              setSelectedDeleteId(item.id)
            }}
            className='absolute right-4 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl poppins-regular hover:scale-150 transition duration-300'
          >
            ×
          </button>
        </div>
      )}
      {item.type === 'paragraph' && (
        <div className='relative group hover:bg-slate-100 py-2 ps-10 pe-12'>
          <textarea
            className={`text-sm poppins-regular text-slate-500 rounded-md outline-none w-full bg-transparent overflow-x-hidden resize-none min-h-[120px] leading-loose`}
            value={item.content as string}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={() => {
              setSelectedDeleteId(item.id)
            }}
            className='absolute right-4 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl poppins-regular hover:scale-150 transition duration-300'
          >
            ×
          </button>
        </div>
      )}

      {item.type === 'image' && (
        <div className='relative group hover:bg-slate-100 py-2 ps-10 pe-12'>
          {item.content === '' ? (
            <div className='cursor-pointer w-2/4 flex items-center justify-center bg-blue-200 rounded-md outline-none text-sm text-blue-900 py-2 px-4 hover:bg-blue-300'>
              <input
                type='file'
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setContent(file)
                  }
                }}
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              />
              Import an image
            </div>
          ) : typeof item.content === 'string' ? (
            <img src={item.content} alt='Image' className='w-full' />
          ) : (
            <img
              src={URL.createObjectURL(item.content)}
              alt='Image'
              className='w-1/2'
            />
          )}
          <button
            onClick={() => {
              setSelectedDeleteId(item.id)
            }}
            className='absolute right-4 top-0 h-full hidden group-hover:flex items-center text-red-400 text-2xl poppins-regular hover:scale-150 transition duration-300'
          >
            ×
          </button>
        </div>
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
