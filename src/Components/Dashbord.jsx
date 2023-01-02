import React from 'react'
import { useNavigate } from 'react-router'

export default function Dashbord() {

    const navigate = useNavigate();

  return (
    <aside className="w-96" aria-label="Sidebar">
    <div
      className="z-10 flex justify-center "
      style={{
        
        backgroundImage:
        'url(' +
        'https://media.istockphoto.com/id/1225155638/photo/green-leaves-on-white.jpg?b=1&s=612x612&w=0&k=20&c=U-yuGVnwjAnib3tiSZEiUA4rjimL0Nlfdwrkr7lpwQM=' +
        ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        height:"300px"
      }}
    >
    </div>
    <p className="text-red">Hello</p>
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="underline underline-offset-1 space-y-2">
        <li className='cursor-pointer' onClick={()=>navigate('')}>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className=" ml-3">Junior Problem</span>
          </a>
        </li>
        <li className='cursor-pointer' onClick={()=>navigate('mentorhelp')}>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Mentor Help</span>
          </a>
        </li>
        <li className='cursor-pointer' onClick={()=>navigate('profile')}>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Profile</span>
          </a>
        </li>
        <li className='cursor-pointer' onClick={()=>navigate('system')}>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">System</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  )
}
