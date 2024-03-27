import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'

type CategoryType = {
  category: string
  id: string
  imageUrl: string
  userId: string
}

export const useGetAllCategories = () => {
  const [allCategories, setAllCategories] = useState<CategoryType[]>([])
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false)

  useEffect(() => {
    const getCategories = async () => {
      setIsCategoriesLoading(true)
      const colRef = collection(db, 'categories')
      const snapshot = await getDocs(colRef)
      const snapshotArray: any = []
      snapshot.docs.forEach((item) => {
        snapshotArray.push({ ...item.data(), id: item.id })
      })
      setAllCategories(snapshotArray)
      setIsCategoriesLoading(false)
    }

    getCategories()
  }, [])

  return { allCategories, isCategoriesLoading }
}
