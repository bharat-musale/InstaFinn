"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import InstaFinn from '../ui/InstaFinn';
import { useRouter } from 'next/navigation';
import { sidebarList } from '@/app/data';
import LogoutModal from '../ui/LogoutModal';
// import { UserContext } from '../context/UserContext';

const Sidebar = ({className}) => {
//   const { user } = useContext(UserContext);
  const [role, setRole] = useState('masterAdmin');
  const [isModalOpen, setIsModalOpen] = useState(false);

const handleLogout = () => {
  console.log("User logged out");

  // Simulate async logout process (e.g., API call)
  setTimeout(() => {
    setIsModalOpen(false);
    router.push("/login"); // Redirect to login page (optional)
  }, 500); // Delay ensures modal doesn't close instantly
};
  const router=useRouter();

//   useEffect(() => {
//     const storedRole = localStorage.getItem('userRole');
//     if (!role && storedRole) {
//       setRole('masterAdmin');
//     }
//   }, [role]);

const navigate=(route)=>{
  console.log(route);
    router.push(route);
}

  return (
    <aside className={`${className} flex flex-col bg-white h-full p-4`}>
      <InstaFinn />
      <ul>
        {Object.values(sidebarList)
          .filter((item) => item.role.includes(role))
          .map((item) => (
            <li
              key={item.value}
              className="p-2 hover:bg-gray-700 hover:text-white font-semibold rounded cursor-pointer"
              onClick={() => {
                item.value == "logout"
                  ? setIsModalOpen(true)
                  : navigate(item.route);
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>
      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </aside>
  );
};

export default Sidebar;
