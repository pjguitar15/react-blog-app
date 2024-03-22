import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'

export const useGetDocFromRoute = (route: string) => {
  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getDataFromRoute = async () => {
      try {
        const collectionRef = collection(db, 'blogs')
        const q = query(collectionRef, where('route', '==', route))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
          console.log('No documents found!')
        } else {
          // Get the first document found
          querySnapshot.forEach((doc) => {
            setData(doc.data())
          })
        }
      } catch (error) {
        console.error('Error getting documents:', error)
      } finally {
        setLoading(false)
      }
    }

    getDataFromRoute()
  }, [])

  return { data, loading }
}
