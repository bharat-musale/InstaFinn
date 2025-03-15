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
import PageHeader from "@/component/Header/PageHeader";

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
        <PageHeader title="vijayprasad motital parab" text={"aaaa 3564 B"} />
        <SectionItem>
            <DataFields/>
        </SectionItem>
    </Layout>
  );
};

export default AddUser;
