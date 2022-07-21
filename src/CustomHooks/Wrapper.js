import axios from 'axios'
import React from 'react'
import ProductInfo from '../ContainerComponents/ProductInfo'
import UserInfo from '../ContainerComponents/UserInfo'
import { useCurrentUser } from './useCurrentUser'
import { useDataSource } from './useDataSource'
import { useResource } from './useResource'
import { useUser } from './useUser'

const Wrapper = () => {
  const getDataFunc = async () => {
    const response = await axios.get('http://localhost:8000/users/123')
    return response.data
  }

  return (
    <>
      <UserInfo user={useCurrentUser()} />
      <hr />
      <UserInfo user={useUser('234')} />
      <hr />
      <UserInfo user={useResource('http://localhost:8000/users/123')} />
      <hr />
      <ProductInfo product={useResource('http://localhost:8000/products/bcd')} />
      <hr />
      {/* <UserInfo user={useDataSource(getDataFunc)} /> */}
    </>
  )
}

export default Wrapper
