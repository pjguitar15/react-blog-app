import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/firebaseConfig'
import { ContentDataType } from '../pages/Admin/admin-pages/Blogs/NewBlog/ContentForm'

export const resetFields = (
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setAuthor: React.Dispatch<React.SetStateAction<string>>,
  setPublishDate: React.Dispatch<React.SetStateAction<string>>,
  setRoute: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setSummary: React.Dispatch<React.SetStateAction<string>>,
  setReadTime: React.Dispatch<React.SetStateAction<string>>,
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>,
  setContentData: React.Dispatch<React.SetStateAction<ContentDataType[]>>
) => {
  setTitle('')
  setAuthor('')
  setPublishDate('')
  setRoute('')
  setCategory('Select a Category')
  setSummary('')
  setReadTime('')
  setSelectedFile(null)
  setContentData([
    { content: 'Please edit this heading', id: 'shn25ay5w', type: 'heading' },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.',
      id: '04zyavyj6',
      type: 'paragraph',
    },
  ])
}

export const processContentData = async (contentData: any) => {
  const modifiedData: any = []

  // ! BUG HERE: else block doesn't wait for asynchronous function to finish
  // Array to hold promises for each asynchronous task
  const promises = contentData.map(async (item: any) => {
    if (item.type === 'image') {
      // upload image logic here
      const imageRef = ref(storage, `images/${item.content?.name}`)

      try {
        // Upload image and get download URL
        await uploadAndGetDownloadURL(imageRef, item, modifiedData)
        console.log('Image pushed')
      } catch (err) {
        console.error(err)
        // Handle error if needed
      }
    } else {
      modifiedData.push(item)
      console.log('Heading/Paragraph pushed')
    }
  })

  // Wait for all promises to resolve
  await Promise.all(promises)

  return modifiedData
}

async function uploadAndGetDownloadURL(
  imageRef: any,
  item: any,
  modifiedData: any
) {
  try {
    await uploadBytes(imageRef, item.content)
    const downloadURL = await getDownloadURL(imageRef)
    modifiedData.push({ ...item, content: downloadURL })
  } catch (err) {
    console.log(err)
  }
}

export const defaultContentData = [
  { content: 'Please edit this heading', id: 'shn25ay5w', type: 'heading' },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.',
    id: '04zyavyj6',
    type: 'paragraph',
  },
]

export const uploadFeaturedImage = async (file: File) => {
  const imageRef = ref(storage, `images/${file.name}`)
  try {
    await uploadBytes(imageRef, file)
    const downloadURL = await getDownloadURL(imageRef)
    return downloadURL
  } catch (err) {
    console.log(err)
    // Handle error if needed
  }
}
