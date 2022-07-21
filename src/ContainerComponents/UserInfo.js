import React from 'react'

const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user ? (typeof user === 'string' ? JSON.parse(user) : user) : {}
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Colors: {hairColor}</p>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default UserInfo
