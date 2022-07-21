import axios from 'axios'
import React from 'react'

export const useResource = (resourcePath) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const response = await axios.get(resourcePath)
      setData(response.data)
    })()
  }, [resourcePath])

  return data
}
