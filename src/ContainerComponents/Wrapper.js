import axios from 'axios'
import CurrentUserLoader from './CurrentUserLoader'
import DataSource from './DataSource'
import ProductInfo from './ProductInfo'
import ResourceLoader from './ResourceLoader'
import UserInfo from './UserInfo'
import UserLoader from './UserLoader'

const getServerData = (url) => async () => {
  const response = await axios.get(url)
  return response.data
}

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key)
}

const Wrapper = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={'234'}>
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceName='user' resourceUrl='http://localhost:8000/users/123'>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName='product' resourceUrl='http://localhost:8000/products/abc'>
        <ProductInfo />
      </ResourceLoader>
      <DataSource resourceName='product' getDataFunc={getServerData('http://localhost:8000/products/bcd')}>
        <ProductInfo />
      </DataSource>
      <DataSource resourceName='user' getDataFunc={getLocalStorageData('user')}>
        <UserInfo />
      </DataSource>
    </>
  )
}

export default Wrapper
