import React, { useState, useMemo } from "react";
import InputField from "./InputField";
import Title from "../ui/Title";
import { allLoanTypes } from "@/app/data";
import { Button } from "antd";

const LoanInputFields = ({ loanType, formData, handleChange, type }) => {
  return (
    <div className="space-y-2">
      {/* Income */}
      <div className="flex items-center space-x-2">
        <InputField
          name={`income_${type}`}
          value={formData[loanType]?.[`income_${type}`] || ""}
          onChange={handleChange}
          width="40"
        />
        <span className="text-sm">Per 1 Lakh</span>
      </div>

      {/* Credit Score */}
      <div className="flex items-center space-x-2">
        <InputField
          name={`creditScore_${type}`}
          value={formData[loanType]?.[`creditScore_${type}`] || ""}
          onChange={handleChange}
          width="40"
        />
        <span className="text-sm">/900</span>
      </div>

      {/* Collateral */}
      <div className="flex items-center space-x-2">
        <InputField
          name={`collateral_${type}`}
          value={formData[loanType]?.[`collateral_${type}`] || ""}
          onChange={handleChange}
          width="40"
        />
        <span className="text-sm">%</span>
      </div>

      {/* Debt to Income Ratio */}
      <div className="flex items-center space-x-2">
        <InputField
          name={`dti_${type}`}
          value={formData[loanType]?.[`dti_${type}`] || ""}
          onChange={handleChange}
          width="40"
        />
        <span className="text-sm">Lower is excellent</span>
      </div>
    </div>
  );
};
function formatString(str) {
  if (typeof str !== 'string') return '';
  return str.toLowerCase().replace(/\s+/g, '_');
}
// Common Loan Fields Component
const LoanFields = ({ loanType, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [loanType]: {
        ...prev[loanType],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <div>
      <p className="ml-2 font-semibold text-md">{loanType.toUpperCase()}</p>

      <div className="border rounded-md p-4 mb-4 w-full shadow-md">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Column 1: Titles (Less Width) */}
          <div className="col-span-2 flex mt-8 flex-col space-y-8">
            <Title title="Income" />
            <Title title="Credit Score" />
            <Title title="Collateral" />
            <Title title="Debt to Income Ratio" />
          </div>

          {/* Column 2: Salary Fields */}
          <div className="col-span-5">
            <label className="inline-flex items-center mb-2 ml-10">
              <input
                type="checkbox"
                name={`salary_${formatString(loanType)}`}
                checked={formData[loanType]?.[`salary_${formatString(loanType)}`] || false}
                onChange={handleChange}
                className="mr-1"
              />
              Salary
            </label>
            <LoanInputFields
              loanType={loanType}
              formData={formData}
              handleChange={handleChange}
              type="salary"
            />
          </div>

          {/* Column 3: Business Fields */}
          <div className="col-span-5">
            <label className="inline-flex items-center mb-2 ml-10">
              <input
                type="checkbox"
                name={`business_${formatString(loanType)}`}
                checked={formData[loanType]?.[`business_${formatString(loanType)}`] || false}
                onChange={handleChange}
                className="mr-1"
              />
              Business
            </label>
            <LoanInputFields
              loanType={loanType}
              formData={formData}
              handleChange={handleChange}
              type="business"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BankSettingForm = () => {
  const [selectedLoans, setSelectedLoans] = useState([]);
  const [formData, setFormData] = useState({});

  const toggleLoanSelection = (loan) => {
    setSelectedLoans((prev) =>
      prev.includes(loan) ? prev.filter((l) => l !== loan) : [...prev, loan]
    );
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  const isFormComplete =
    selectedLoans.length > 0 &&
    selectedLoans.every(
      (loan) =>
        formData[loan] &&
        Object.values(formData[loan]).length > 0 &&
        Object.values(formData[loan]).every((value) =>
          typeof value === "boolean" ? true : value.trim() !== ""
        )
    );

  return (
    <div className="border rounded-md p-4 mb-4 shadow-md w-full max-w-3xl">
      <div className="flex gap-2 items-center">
        <span className="font-bold text-lg">Settings</span>
        <span className="font-semibold text-sm">Make Default</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {allLoanTypes?.map((loan) => (
          <label key={loan} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={selectedLoans.includes(loan)}
              onChange={() => toggleLoanSelection(loan)}
              className="mr-2"
            />
            <span className="text-sm">{loan}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-2">
        {selectedLoans.map((loan) => (
          <LoanFields
            key={loan}
            loanType={loan}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          className={`font-semibold ${isFormComplete ? "bg-gray-800 cursor-pointer" : "bg-gray-400 cursor-not-allowed"} text-white rounded`}
          onClick={handleSubmit}
          disabled={!isFormComplete}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BankSettingForm;
