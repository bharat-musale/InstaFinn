"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/component/Layout/layout";
import LoanApplications from "@/component/Applications/LoanApplications";
import CreateUser from "@/component/CreateUsers/CreateUser";
import CreateLender from "@/component/CreateUsers/CreateLender";
import CreateClient from "@/component/CreateUsers/CreateClient";
import { useRouter } from "next/navigation";
import useGetQueryParam from "@/component/utils/commonFunctions";
import CreateSubUser from "@/component/Applications/SubUserApplicant";
import CreateSubUsers from "@/component/CreateUsers/CreateSubUser";

const AddUser = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  console.log(router);
  const user = useGetQueryParam("user");

  useEffect(() => {
    console.log("user parameter:", user);
  }, [user]); 
  return (
    <Layout setSidebarCollapsed={setCollapsed}>
      {user?.toLowerCase() == "user" && <CreateUser />}
      {user?.toLowerCase() == "lender" && <CreateLender />}
      {user?.toLowerCase() == "client" && <CreateClient />}
      {user?.toLowerCase() == "sub-user" && <CreateSubUsers />}
    </Layout>
  );
};

export default AddUser;