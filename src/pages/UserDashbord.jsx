import React from 'react'
import { Outlet } from 'react-router-dom';
import Dashbord from '../Components/Dashbord';

export default function UserDashbord() {
  return (
    <div className='flex'>
        <Dashbord/>
        <Outlet/>
    </div>
  )
}
