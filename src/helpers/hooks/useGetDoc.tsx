import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const useGetDoc = (colName: string) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const getDocFromFirestore = async () => {
      const colRef = collection(db, colName)
      const snapshot = await getDocs(colRef)
      const snapshotArray: any = []
      snapshot.docs.forEach((item) => {
        snapshotArray.push({ ...item.data(), id: item.id })
      })
      setData(snapshotArray)
    }

    getDocFromFirestore()
  }, [colName])

  return data
}
