"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import SectionItem from "../ui/SectionItem";
import CommonFields from "../form/CommonFields";
import { Button } from "antd";

const CreateUser = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: "",
    familyDetails: "",
    incomeDetails: "",
    borrowings: "",
    investments: "",
    creditScore: "",
    loanTypeAndDocuments: "",
    documents: null,
  });

  const [sections, setSections] = useState([
    { key: "personalInfo", title: "Personal Information", status: "Pending" },
    { key: "familyDetails", title: "Family Details", status: "Pending" },
    { key: "incomeDetails", title: "Income Details", status: "Pending" },
  ]);

  const inputFields = {
    personalInfo: [
      { key: "fullName", label: "Name", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "email", label: "Email", type: "email" },
    ],
    familyDetails: [
      { key: "familyDetails", label: "Family Details", type: "textarea" },
      { key: "pinCode", label: "Pin Code", type: "number" },
    ],
    incomeDetails: [
      { key: "businessName", label: "Business Name", type: "text" },
      // { key: "incomeDetails", label: "Income Details", type: "textarea" },
    ],
  };

  const [collapsed, setCollapsed] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    setIsFormComplete(
      sections.every((section) => section.status === "Completed") &&
        formData?.mobile?.trim()
    );
  }, [sections, formData?.mobile.length]);

console.log(isFormComplete);
  const handleSubmit = () => {
    if (isFormComplete) {
      console.log("Form submitted successfully", formData);
    } else {
      alert("Please complete all sections before submitting.");
    }
  };

  return (
    <>
      <PageHeader
        collapsed={collapsed}
        title="Create User"
        addNewSubUser
        setFormData={setFormData}
      />
      <div className="container mx-auto max-w-3xl">
        {sections.map((section, index) => (
          <SectionItem
            key={section.key}
            title={section.title}
            status={section.status}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <CommonFields
              formData={formData}
              setFormData={setFormData}
              inputFields={inputFields[section.key]}
              sectionKey={section.key}
              setSections={setSections} // <-- Add this line
            />
          </SectionItem>
        ))}
        <div className="flex justify-end">
          <Button
            className={`font-semibold ${
              isFormComplete
                ? "bg-gray-800 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            } text-white rounded`}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
