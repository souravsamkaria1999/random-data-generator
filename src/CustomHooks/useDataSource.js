import React from 'react'

export const useDataSource = (getResourceFunc) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const result = await getResourceFunc()
      setData(result)
    })()
  }, [getResourceFunc])

  return data
}
