"use client";

import PageHeader from "@/component/Header/PageHeader";
import Layout from "@/component/Layout/layout";
import React, { useEffect, useState } from "react";
import { bankData } from "../data";
import LoanCard from "@/component/ui/LoanCard";


const Lender = () => {
  //Set page title
  useEffect(() => {
    document.title = "Applications";
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [settingBank, setSettingBank] = useState(null);

  console.log(isSettingOpen);

  return (
    <>
      <Layout setSidebarCollapsed={setCollapsed}>
        <PageHeader
          collapsed={collapsed}
          title="Lender"
          subTitle="(bank/nbfc)"
          showAddLender
          showFilter
        />
        <div className="flex-1 flex flex-col items-center">
          <div className="container-lg m-4 mt-4 w-full max-w-7xl mx-auto grid grid-rows-1">
            {Array.isArray(bankData) &&
              bankData.map(
                (bank, index) => (
                  console.log(bank, index),
                  (
                    <LoanCard
                      key={index}
                      data={bank}
                      // setIsSettingOpen={setIsSettingOpen}
                      // isSettingOpen={isSettingOpen}
                      // setSettingBank={setSettingBank}
                      
                    />
                  )
                )
              )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Lender;
