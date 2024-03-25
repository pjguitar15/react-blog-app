import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'

export const useGetAllRoutes = () => {
  const [allRoutes, setAllRoutes] = useState([])
  useEffect(() => {
    const getDocFromFirestore = async () => {
      const colRef = collection(db, 'blogs')
      const snapshot = await getDocs(colRef)
      const snapshotArray: any = []
      snapshot.docs.forEach((item) => {
        snapshotArray.push({ ...item.data(), id: item.id })
      })
      const mappedArr = snapshotArray.map((item: any) => {
        return { route: item.route }
      })
      setAllRoutes(mappedArr)
    }

    getDocFromFirestore()
  }, [])
  return { allRoutes }
}
