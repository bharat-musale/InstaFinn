"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../Header/PageHeader";
import SectionItem from "../ui/SectionItem";
import CommonFields from "../form/CommonFields";
import { Button } from "antd";

const CreateLender = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    bankPersonFullName: "",
    bankPersonAddress: "",
    bankPersonEmail: "",
    bankPersonDesignation: "",
    bankPersonEId: "",
    bankBranch: "",
    bankName: "",
    mobile: ""
  });

  const [sections, setSections] = useState([
    { key: "bankName", title: "Select Bank", status: "Pending" },
    { key: "bankBranch", title: "Select Branch", status: "Pending" },
    { key: "bankPerson", title: "Key Person Details", status: "Pending" }
  ]);

const [options, setOptions] = useState([
  { value: "sbi", label: "State Bank of India" },
  { value: "hdfc", label: "HDFC Bank" },
  { value: "icici", label: "ICICI Bank" },
  { value: "axis", label: "Axis Bank" },
  { value: "kotak", label: "Kotak Mahindra Bank" },
  { value: "indusind", label: "IndusInd Bank" },
  { value: "yes", label: "Yes Bank" },
  { value: "pnb", label: "Punjab National Bank" },
  { value: "bob", label: "Bank of Baroda" },
  { value: "canara", label: "Canara Bank" },
]);



  const inputFields = {
    bankPerson: [
      { key: "bankPersonFullName", label: "Name", type: "text" },
      { key: "bankPersonAddress", label: "Address", type: "text" },
      { key: "bankPersonEmail", label: "Email", type: "email" },
      { key: "bankPersonDesignation", label: "Designation", type: "text" },
      { key: "bankPersonEId", label: "Employee ID", type: "text" }
    ],
    bankBranch: [
      { key: "bankBranch", label: "Select Branch", type: "searchSelect", options:[
        { value: "branch1", label: "Branch 1" },
        { value: "branch2", label: "Branch 2" },
        { value: "branch3", label: "Branch 3" }
      ] }
    ],
    bankName: [
      { key: "bankName", label: "Select Bank", type: "searchSelect", options }
    ]
  };

  const [collapsed, setCollapsed] = useState(false);

  const handleInputChange = (sectionKey, fieldKey, value) => {
    const updatedFormData = { ...formData, [fieldKey]: value };
    setFormData(updatedFormData);

    const isSectionComplete = inputFields[sectionKey].every(
      (field) => updatedFormData[field.key]?.trim()
    );

    setSections((prevSections) =>
      prevSections.map((section) =>
        section.key === sectionKey
          ? { ...section, status: isSectionComplete ? "Completed" : "Pending" }
          : section
      )
    );
  };

  const isFormComplete = sections.every(
    (section) => section.status === "Completed"
  ) && formData?.mobile?.trim();
  
  const handleSubmit = () => {
    if (isFormComplete) {
      console.log("Form submitted successfully", formData);
    } else {
      alert("Please complete all sections before submitting.");
    }
  };

  return (
    <div>
      <PageHeader collapsed={collapsed} title="Create Lender" subTitle="(bank/nbfc)" addNewSubUser setFormData={setFormData} />
      <div className="container mx-auto max-w-3xl">
        {sections?.map((section, index) => (
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
              setSections={setSections}
              onInputChange={(fieldKey, value) => handleInputChange(section.key, fieldKey, value)}
            />
          </SectionItem>
        ))}
        <div className="flex justify-end">
          <Button className={`font-semibold ${isFormComplete ? "bg-gray-800 cursor-pointer": "bg-gray-400 cursor-not-allowed"} text-white rounded`} onClick={handleSubmit} disabled={!isFormComplete}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLender;
