"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import { bankData } from "@/app/data";
import LoanCard from "../ui/LoanCard";

const BankApplicant = () => {
  //Set page title
  useEffect(() => {
    document.title = "Applications";
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const [isSettingOpen,setIsSettingOpen] = useState(false);
  const [settingBank,setSettingBank]=useState(null);
  
  
  console.log(isSettingOpen)

  return (
    <>
        {/* <PageHeader collapsed={collapsed} title="Lender" subTitle="(bank/nbfc)" showAddClient showFilter /> */}
        <div className="flex-1 flex flex-col items-center">
          <div className="container-lg m-4 mt-4 w-full max-w-7xl mx-auto grid grid-rows-1">
            {Array.isArray(bankData) &&
              bankData.map((bank, index) => (
                <LoanCard key={index} data={bank} isSetting setIsSettingOpen={setIsSettingOpen} isSettingOpen={isSettingOpen} setSettingBank={setSettingBank} />
              ))}
          </div>
        </div>
    </>
  );
};

export default BankApplicant;
