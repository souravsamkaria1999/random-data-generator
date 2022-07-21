import axios from 'axios'
import React from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const response = await axios.get('http://localhost:8000/current-user')
      setUser(response.data)
    })()
  }, [])

  return user
}
