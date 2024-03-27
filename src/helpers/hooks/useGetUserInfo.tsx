import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { useAuthContext } from '../../Context/AuthContext'

type UserInfo = {
  type: string
  uid: string
  email: string
}

export const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const { loggedInUser } = useAuthContext()
  useEffect(() => {
    const getDocFromFirestore = async () => {
      if (loggedInUser) {
        setLoading(true)
        const colRef = collection(db, 'users')
        const snapshot = await getDocs(colRef)
        const snapshotArray: any = []
        snapshot.docs.forEach((item: any) => {
          snapshotArray.push({ ...item.data(), id: item.id })
        })
        // setUserInfo(snapshotArray)
        console.log(snapshotArray)
        console.log(loggedInUser.uid)

        const findUserId = snapshotArray.filter(
          (item: any) => item?.uid === loggedInUser.uid
        )

        setUserInfo(findUserId[0])

        setLoading(false)
      }
    }

    getDocFromFirestore()
  }, [loggedInUser])
  return { userInfo, loading }
}
