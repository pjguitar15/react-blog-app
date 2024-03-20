import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/firebaseConfig'

export const resetFields = (
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setAuthor: React.Dispatch<React.SetStateAction<string>>,
  setPublishDate: React.Dispatch<React.SetStateAction<string>>,
  setRoute: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setSummary: React.Dispatch<React.SetStateAction<string>>,
  setReadTime: React.Dispatch<React.SetStateAction<string>>,
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
) => {
  setTitle('')
  setAuthor('')
  setPublishDate('')
  setRoute('')
  setCategory('Select a Category')
  setSummary('')
  setReadTime('')
  setSelectedFile(null)
}

// upload functions
export const processContentData = async (contentData: any) => {
  const modifiedData: any = []

  // Array to hold promises for each asynchronous task
  const promises = contentData.map(async (item: any) => {
    if (item.type === 'image') {
      // upload image logic here
      const imageRef = ref(storage, `images/${item.content?.name}`)
      console.log('Loading...')

      try {
        // Upload image and get download URL
        await uploadAndGetDownloadURL(imageRef, item, modifiedData)
      } catch (err) {
        console.error(err)
        // Handle error if needed
      }
    } else {
      modifiedData.push(item)
    }
  })

  // Wait for all promises to resolve
  await Promise.all(promises)

  return modifiedData
  // Next Step
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
    // Handle error if needed
  }
}
