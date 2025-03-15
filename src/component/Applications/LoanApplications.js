"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import { loanData } from "@/app/data";
import LoanCard from "../ui/LoanCard";


const LoanApplications = () => {
  //Set page title
  useEffect(() => {
    document.title = "Applications";
  }, []);
  const [collapsed, setCollapsed] = useState(false);

  const title=false?"My Applications":"Loan Applications";

  return (
    <>
        <PageHeader collapsed={collapsed} title={title} showFilter />
        <div className="flex-1 flex flex-col items-center">
          <div className="container-lg m-4 mt-4 w-full max-w-7xl mx-auto grid grid-rows-1">
            {Array.isArray(loanData) &&
              loanData.map((loan, index) => (
                <LoanCard key={index} data={loan} />
              ))}
          </div>
        </div>
    </>
  );
};

export default LoanApplications;
