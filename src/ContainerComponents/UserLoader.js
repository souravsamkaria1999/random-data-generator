import axios from 'axios'
import React from 'react'

const UserLoader = ({ children, userId }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const respose = await axios.get('http://localhost:8000/users/' + userId)
      const currentUser = respose.data
      setUser(currentUser)
    })()
  }, [userId])

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }
      })}
    </>
  )
}

export default UserLoader
