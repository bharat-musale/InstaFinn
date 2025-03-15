"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import SectionItem from "../ui/SectionItem";
import CommonFields from "../form/CommonFields";
import { allLoanTypes, investments } from "@/app/data";
import { Button } from "antd";

const CreateClient = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({});

  const [sections, setSections] = useState([
    { key: "personalInfo", title: "Personal Information", status: "Pending" },
    { key: "familyDetails", title: "Family Details", status: "Pending" },
    { key: "incomeDetails", title: "Income Details", status: "Pending" },
    { key: "borrowings", title: "Borrowings", status: "Pending" },
    { key: "investments", title: "Investments", status: "Pending" },
    { key: "creditScore", title: "Credit Score", status: "Pending" },
    {
      key: "loanTypeAndDocuments",
      title: "Loan Type and Documents",
      status: "Pending",
    },
  ]);

  const inputFields = {
    personalInfo: [
      { key: "address", label: "Address", type: "text" },
      { key: "dob", label: "Date of Birth", type: "date" },
      { key: "email", label: "Email Address", type: "email" },
      { key: "fullName", label: "Full Name", type: "text" },
      {
        key: "gender",
        label: "Gender",
        type: "select",
        options: ["Male", "Female", "Transgender"],
      },
      { key: "mobile", label: "Mobile Number", type: "text" },
      { key: "nationality", label: "Nationality", type: "text" },
      { key: "pin", label: "PIN", type: "text" },
    ],
    familyDetails: [
      {
        key: "childrenCount",
        label: "Children (Below 21) Count",
        type: "number",
      },
      { key: "fatherDOB", label: "Father Date of Birth", type: "date" },
      { key: "fatherName", label: "Father Name", type: "text" },
      { key: "maritalStatus", label: "Marital Status", type: "text" },
      { key: "motherDOB", label: "Mother Date of Birth", type: "date" },
      { key: "motherName", label: "Mother Name", type: "text" },
      { key: "spouseDOB", label: "Spouse Date of Birth", type: "date" },
      { key: "spouseName", label: "Spouse Name", type: "text" },
    ],
    incomeDetails: [
      {
        key: "employerAddress",
        label: "Employer/Business Address",
        type: "text",
      },
      {
        key: "employerOrBusinessName",
        label: "Employer/Business Name",
        type: "text",
      },
      { key: "incomeType", label: "Income Type", type: "text" },
      { key: "workEmail", label: "Work Email", type: "email" },
    ],
    // salaryBusiness: [
    //   { key: "businessAddress", label: "Address", type: "text" }, { key: "businessName", label: "Name of Employer/Business", type: "text" }, { key: "incomeType", label: "Income Type", type: "text" }, { key: "workEmail", label: "Work Email", type: "email" }
    // ],
    borrowings: [
      { key: "emiAmount", label: "EMI Amount", type: "number" },
      { key: "loanAmount", label: "Amount", type: "number" },
      {
        key: "loanType",
        label: "Select Loan Type",
        type: "select",
        options: allLoanTypes,
      },
    ],
    investments: [
      { key: "investmentAmount", label: "Current Amount", type: "number" },
      {
        key: "investmentType",
        label: "Select Investment",
        type: "select",
        options: [
          "Stocks",
          "Bonds",
          "Mutual Funds",
          "Fixed Deposits",
          "Real Estate",
          "Public Provident Fund (PPF)",
          "Cryptocurrencies",
          "Other",
        ],
      },
    ],
    creditScore: [
      { key: "creditScore", label: "Credit Score", type: "number" },
      {
        key: "creditUpload",
        label: "Upload Credit Score Document",
        type: "file",
      },
    ],
    loanTypeAndDocuments: [
      // { key: "loanType", label: "Loan Type", type: "text" },
      {
        key: "uploadDocuments",
        label: "Upload Documents",
        type: "multiDoc",
        documents: [
          { key: "photo", label: "Photo", type: "file", quantity: 1 },
          {
            key: "aadharcard",
            label: "Aadhar Card",
            type: "file",
            quantity: 2,
          },
          { key: "pancard", label: "Pan Card", type: "file", quantity: 1 },
          {
            key: "incomeTaxReturn",
            label: "Income Tax Return",
            type: "file",
            quantity: 5,
          },
          {
            key: "creditReport",
            label: "Credit Report",
            type: "file",
            quantity: 1,
          },
        ],
      },
    ],
  };

  const [collapsed, setCollapsed] = useState(false);

  const isFormComplete = sections.every(
    (section) => section.status === "Completed"
  );

  const handleSubmit = () => {
    if (true) {
      console.log("Form submitted successfully", formData);
    } else {
      alert("Please complete all sections before submitting.");
    }
  };

  return (
    <>
      <PageHeader collapsed={collapsed} title="Add New Client" isPan setFormData={setFormData} />
      <div className="container mx-auto max-w-3xl">
        {sections.map((section, index) => (
          <SectionItem
            key={section.key}
            title={section.title}
            status={section.status}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
           { <CommonFields
              formData={formData}
              setFormData={setFormData}
              inputFields={inputFields[section.key]}
              sectionKey={section.key}
              setSections={setSections}
              section={section}
            />}
          </SectionItem>
        ))}
        <div className="flex justify-end">
          <Button className={`font-semibold ${true ? "bg-gray-800 cursor-pointer": "bg-gray-400 cursor-not-allowed"} text-white rounded`} onClick={handleSubmit} >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateClient;
