import React, { useState, useEffect } from "react";
import LoanDetails from "./LoanDetails";
import ApplicantName from "./ApplicantName";
import CibilScore from "./CibilScore";
import LoanAmount from "./LoanAmount";
import SkeletonLoader from "./SkeletonLoader";
import BankSettingForm from "../form/BankSettingForm";

const LoanCard = ({
  key,
  data,
  setIsSettingOpen,
  isSettingOpen = null,
  setSettingBank,
  isSetting=false}) => {
  // { key: 1, bankType: "Public", bankName: "State Bank of India", applications: 120, amount: 5000000 },

  const [isSettingFlag, setIsSettingFlag] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-2 gap-2">
      {data ? (
        <div className="border border-gray-300 rounded-lg p-2 px-4 flex flex-col sm:flex-row justify-between items-center shadow-md w-full max-w-3xl">
          {/* Loan Details */}
          <div className="flex flex-col w-full sm:w-4/5">
            {data.loanType && data.status && (
              <LoanDetails loanType={data.loanType} status={data.status} />
            )}
            {data.bankType && <LoanDetails loanType={data.bankType} />}
            {data.bankName && <ApplicantName name={data.bankName} />}

            {data.applicantName && <ApplicantName name={data.applicantName} />}
            {isSetting  && (
              <p
                className="text-xs font-medium cursor-pointer"
                onClick={() => {
                  setIsSettingOpen(data?.key);
                  setSettingBank(data);
                  setIsSettingFlag(!isSettingFlag);
                }}
              >
                Setting
              </p>
            )}
            <div></div>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/4 mt-4 sm:mt-0">
            {/* CIBIL Score */}
            {data.cibilScore && (
              <>
                <span className="text-gray-500 text-sm">CIBIL Score</span>
                <CibilScore score={data.cibilScore} />
                {/* Color Indicators */}
                <div className="flex justify-center mt-1">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </>
            )}
            {/* Applications */}
            {data?.applications && (
              <>
                <span className="text-gray-500 text-sm">Applications</span>
                <CibilScore score={data?.applications} />{" "}
              </>
            )}
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/4 mt-4 sm:mt-0">
            {data.amount && (
              <>
                <span className="text-gray-500 text-sm">Amount</span>
                <LoanAmount amount={data.amount} />
                <div></div>
              </>
            )}
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
      {data?.key === isSettingOpen && isSettingFlag && <BankSettingForm />}
    </div>
  );
};

export default LoanCard;
