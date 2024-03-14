import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const useGetDoc = () => {
  const [data, setData] = useState([])
  const getDocFromFirestore = async (colName: string) => {
    const colRef = collection(db, colName)
    getDocs(colRef).then((snapshot) => {
      const snapshotArray: any = []
      snapshot.docs.forEach((item) => {
        snapshotArray.push({ ...item.data() })
      })
      setData(snapshotArray)
    })
  }

  return { getDocFromFirestore, data }
}
