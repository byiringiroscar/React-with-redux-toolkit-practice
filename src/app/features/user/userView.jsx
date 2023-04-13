import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

const UserView = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
  return (
    <div>
        <h2>List of users - </h2>
        {user.loading && <div>Loading ....</div>}
        {!user.loading && user.error ? <div>{user.error}</div> : null}
        {!user.loading && user.users.results && user.users.results.length  ? (
            <ul>
                {user.users.results.map((user) => (
                    <li key={user.email}>{user.name.last}</li>
                    ))}
            </ul>
        ): null}
    </div>
  )
}

export default UserView