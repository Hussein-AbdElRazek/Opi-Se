import React from 'react'
import { ProfileItem } from './ProfileItem'
import { Divider } from '@mui/material'

export const ProfileList = ({ list }) =>
{
  return (
    <>
      {list.map((item,index) => (
        <>
          <ProfileItem {...item} />
          {index!==list.length - 1 && <Divider/>}
        </>
      ))}
    </>
  )
}
