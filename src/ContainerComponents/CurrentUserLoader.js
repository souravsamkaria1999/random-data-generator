import axios from 'axios'
import React from 'react'

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const respose = await axios.get('http://localhost:8000/current-user')
      const currentUser = respose.data
      setUser(currentUser)
    })()
  }, [])

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

export default CurrentUserLoader
