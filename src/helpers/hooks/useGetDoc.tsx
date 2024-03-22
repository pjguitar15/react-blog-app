import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const useGetDoc = (collectionName: string) => {
  const [dataFromFirestore, setDataFromFirestore] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getDocFromFirestore = async () => {
      setLoading(true)
      const colRef = collection(db, collectionName)
      const snapshot = await getDocs(colRef)
      const snapshotArray: any = []
      snapshot.docs.forEach((item) => {
        snapshotArray.push({ ...item.data(), id: item.id })
      })
      setDataFromFirestore(snapshotArray)
      setLoading(false)
    }

    getDocFromFirestore()
  }, [collectionName])

  useEffect(() => {
    console.log(dataFromFirestore)
  }, [dataFromFirestore])

  return { dataFromFirestore, loading }
}
