import axios from 'axios'
import React from 'react'

export const useUser = (userId) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const response = await axios.get('http://localhost:8000/users/' + userId)
      setUser(response.data)
    })()
  }, [userId])

  return user
}
