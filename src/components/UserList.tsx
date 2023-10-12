import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const UserList = () => {
  const { error, loading, users } = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()
  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {users.map((user) => (<h1 key={user.id}>{user.name}</h1>))}
    </div>
  )
}

export default UserList