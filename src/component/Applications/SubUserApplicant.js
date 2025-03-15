"use client";

import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import PageHeader from "../Header/PageHeader";
import { subUserData } from "@/app/data";
import UserCard from "../ui/UserCard";

const SubUserApplicant = () => {
  //Set page title
  useEffect(() => {
    document.title = "subuser";
  }, []);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <PageHeader
        collapsed={collapsed}
        title="my Sub Users"
        showFilter
        showAddSubUser
      />
      <div className="flex-1 flex flex-col items-center">
        <div className="container-lg m-4 mt-4 w-full max-w-7xl mx-auto grid grid-rows-1">
          {Array.isArray(subUserData) &&
            subUserData.map((user, index) => (
              <UserCard key={index} data={user} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SubUserApplicant;
