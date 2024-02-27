import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const currentLocation = location.pathname.split('/')[2]

  return <div>{currentLocation}</div>
}

export default Dashboard
