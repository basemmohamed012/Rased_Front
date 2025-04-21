import React from 'react'
import SideBar from '../../../Layout/SideBar/sideBar'
import Profile from './Profile'
const ProfileClient = () => {
  return (
    <div>
      <SideBar />
      <div className='absolute top-[60px] right-[190px]'>
      <Profile />
      </div>
    </div>
  )
}

export default ProfileClient
