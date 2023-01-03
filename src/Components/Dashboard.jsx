import { Sidebar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router";
import {
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
} from "react-icons/hi";
import {MdScreenSearchDesktop, MdSettings} from 'react-icons/md';
import {FaHandsHelping} from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-fit">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="z-10 flex justify-center h-[10rem] bg-yellow-300 hover:bg-yellow-300"
              style={{
                backgroundImage:
                  "url(" +
                  "https://liftoff.io/wp-content/uploads/2022/10/new-liftoff-logo.png" +
                  ")",
                backgroundSize: "200px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            ></Sidebar.Item>
            <Sidebar.Item href="#" icon={MdScreenSearchDesktop}>
            <Link to={'/jobtrack'}>JobTrack</Link>  
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiViewBoards}
              labelColor="alternative"
            >
             <Link to={''}>Need Help?</Link>  
            </Sidebar.Item>
            <Sidebar.Item
              icon={FaHandsHelping}
            >
             <Link to={'mentorhelp'}>Help Junior</Link>  
            </Sidebar.Item>
            <Sidebar.Item icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item icon={HiUser}>
            <Link to={'profile'}>Profile</Link> 
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={MdSettings}>
            <Link to={'system'}>Settings</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
    //   <aside className="w-80" aria-label="Sidebar">
    //   <div
    //     className="z-10 flex justify-center h-1/3 bg-yellow-300"
    //     style={{

    //       backgroundImage:
    //       'url(' +
    //       'https://liftoff.io/wp-content/uploads/2022/10/new-liftoff-logo.png' +
    //       ')',
    //       backgroundSize:'200px',
    //       backgroundRepeat: 'no-repeat',
    //       backgroundPosition: 'center',
    //       position: 'relative',
    //     }}
    //   >
    //   </div>
    //   <p className="text-red">Hello</p>
    //   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    //     <ul className="underline underline-offset-1 space-y-2">
    //       <li className='cursor-pointer' onClick={()=>navigate('')}>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <span className=" ml-3">Junior Problem</span>
    //         </a>
    //       </li>
    //       <li className='cursor-pointer' onClick={()=>navigate('mentorhelp')}>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <span className="ml-3">Mentor Help</span>
    //         </a>
    //       </li>
    //       <li className='cursor-pointer' onClick={()=>navigate('profile')}>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <span className="ml-3">Profile</span>
    //         </a>
    //       </li>
    //       <li className='cursor-pointer' onClick={()=>navigate('system')}>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <span className="ml-3">System</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </aside>
  );
}
