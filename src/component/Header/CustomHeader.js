"use client";

import React, { useState } from "react";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ImSwitch } from "react-icons/im";
import { Button, Modal, Tooltip } from "antd";
import Image from "next/image"; 
import localImage from './149071.png'; // Adjust the path if necessary
import InstaFinn from "../ui/InstaFinn";

function CustomHeader(props) {
  const router = useRouter();
  const { name, role, profileImage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [confLogout, setConfLogOut] = useState(false);

  const logout = async () => {
    localStorage.removeItem("user_details");
    // Cookies.remove("Auth");
    router.push("/login");
  };

  return (
    <header className="top-0 w-full  flex justify-between items-center">
      {/* Left: Logo & Back Button */}
      <div className="flex items-center">
        <InstaFinn />

        <Button shape="round" size="small" className="border-gray-500 ml-4" onClick={() => router.back()}>
          ← Back
        </Button>
      </div>

      {/* Right: User Profile Section */}
      <div className="flex items-center space-x-3">
        <div className="flex flex-col text-right">
          <span className="text-gray-500 text-sm">Welcome</span>
          <span className="text-gray-800 text-sm font-bold">{name || 'Prathmesh Patil'}</span>
          <span className="text-gray-500 text-xs">{role || 'Admin'}</span>
        </div>
        <Image
          src={localImage} // Replace with actual profile image
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        {/* Logout Button */}
        <Tooltip title="Log Out">
          <button onClick={() => setConfLogOut(true)}>
            <ImSwitch size={22} className="text-gray-600 hover:text-red-500" />
          </button>
        </Tooltip>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        footer={null}
        open={confLogout}
        onCancel={() => setConfLogOut(false)}
      >
        <h3>Are you sure you want to logout?</h3>
        <div className="mt-4 flex justify-end gap-3">
          <Button onClick={logout} style={{ background: "#001529", color: "white" }}>
            Yes
          </Button>
          <Button onClick={() => setConfLogOut(false)} style={{ background: "white", color: "#001529" }}>
            No
          </Button>
        </div>
      </Modal>
    </header>
  );
}

export default CustomHeader;
