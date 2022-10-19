import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../utils/api'
import User from './User'
import Loading from './Loading'

const Users = () => {
  const { data, isLoading } = useQuery(['users'], fetchUsers)

  if (isLoading) return <Loading />

  return (
    <div>
      {data.map(user => (
        <User user={user} key={user.username} />
      ))}
    </div>
  )
}
// some comment
export default Users
