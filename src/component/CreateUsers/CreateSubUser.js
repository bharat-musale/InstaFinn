"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import SubUserForm from "../form/SubUserForm";


const CreateSubUsers = () => {
  const [mobile, setMobile] = useState("");
  const [activeIndex, setActiveIndex] = useState(null); // Track active section
  const sections = [
    {
      title: "Personal Information",
      status: "Pending",
      content: "Fill in your personal details.",
    },
    {
      title: "Family Details",
      status: "Pending",
      content: "Provide your family information.",
    },
    {
      title: "Income Details",
      status: "Pending",
      content: "Share your income details.",
    },
  ];
  const [collapsed, setCollapsed] = useState(false);

  //Set page title
  useEffect(() => {
    document.title = "Applications";
  }, []);

  return (
    <>
        <PageHeader collapsed={collapsed} title="add new Sub-User" addNewSubUser />
        <SubUserForm />
    </>
  );
};

export default CreateSubUsers;
