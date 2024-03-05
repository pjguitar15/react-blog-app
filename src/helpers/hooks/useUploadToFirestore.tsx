import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

export const useUploadToFirestore = () => {
  const uploadPayload = (collectionName: string, payload) => {
    return new Promise((resolve, reject) => {
      const collectionRef = collection(db, collectionName)

      addDoc(collectionRef, payload)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          resolve(docRef)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
          reject(error)
        })
    })
  }

  return { uploadPayload }
}
