import React from 'react'

const ProductInfo = ({ product }) => {
  const { id, name, price, description, rating } = product || {}
  return product ? (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <h4>Rating</h4>
      <p>{rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default ProductInfo
