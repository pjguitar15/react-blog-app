import Resizer from 'react-image-file-resizer'

const useImageResizer = () => {
  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri)
        },
        'file'
      )
    })

  return { resizeFile }
}

export default useImageResizer
