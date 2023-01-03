import React from 'react'
import { Outlet } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

export default function UserDashbord() {
  return (
    <div className='flex'>
        <Dashboard/>
        <Outlet/>
    </div>
  )
}
