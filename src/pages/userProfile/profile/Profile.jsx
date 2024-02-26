import React from 'react'
import Navigation from '../../../components/navigation/Navigation'
import UserProfile from '../../../components/UserProfile'


const Profile = () => {
  return (
    <main className='flex'>
      <Navigation />
      <UserProfile />
    </main>
  )
}

export default Profile