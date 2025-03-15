"use client";
import { Button } from "antd";
import { useEffect, useState } from "react";
import MobileInput from "../ui/MobileInput";
import TextInput from "../form/TextInput";
import { VscSettings } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const PageHeader = ({
  title = "",
  subTitle = "",
  showFilter = false,
  showAddClient = false,
  addNewSubUser = false,
  isPan = false,
  collapsed,
  setFormData,
  text,
  showAddLender = false,
  showAddSubUser=false
}) => {
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const router = useRouter();
  useEffect(() => {
    setFormData &&
      mobile &&
      setFormData((prev) => ({ ...prev, ["mobile"]: mobile }));
  }, [mobile]);
  useEffect(() => {
    setFormData && pan && setFormData((prev) => ({ ...prev, ["pan"]: pan }));
  }, [pan]);
  return (
    <div className="container-lg w-full max-w-7xl mx-auto flex justify-center items-center">
      <div className=" flex flex-col sm:flex-row justify-between items-center w-full max-w-3xl">
        <div
          className={`container-div w-full flex  items-center justify-between`}
        >
          {/* Title Section */}
          <div
            className={`flex col-span-6 items-center ${showFilter && "gap-2"}`}
          >
            {title && (
              <h1 className="text-2xl font-bold text-gray-800">
                {title.toUpperCase()}
              </h1>
            )}
            {subTitle && (
              <p className="my-2 text-sm font-semibold text-gray-500">
                {subTitle?.toUpperCase()}
              </p>
            )}
            {showFilter && (
              <Button shape="round" size="small" className="border-gray-500">
                <VscSettings />
              </Button>
            )}
          </div>

          <div className="col-span-6 flex flex-wrap justify-end gap-4">
            {showAddClient && (
              <Button
                shape="round"
                size="small"
                className="border-gray-500"
                onClick={() => router.push("/adduser?user=user")}
              >
                Add New User
              </Button>
            )}
            {showAddClient && (
              <Button
                shape="round"
                size="small"
                className="border-gray-500"
                onClick={() => router.push("/applications?type=sub-user")}
              >
                Add New SubUser
              </Button>
            )}
            {showAddSubUser && (
              <Button
                shape="round"
                size="small"
                className="border-gray-500"
                onClick={() => router.push("/adduser?user=sub-user")}
              >
                Add New SubUser
              </Button>
            )}
            {showAddClient && (
              <Button
                shape="round"
                size="small"
                className="border-gray-500"
                onClick={() => router.push("/adduser?user=client")}
              >
                Add New Client
              </Button>
            )}
            {showAddLender && (
              <Button
                shape="round"
                size="small"
                className="border-gray-500"
                onClick={() => router.push("/adduser?user=lender")}
              >
                Add New Lender
              </Button>
            )}
            {addNewSubUser && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Enter Mobile</span>
                <MobileInput onMobileChange={setMobile} />
              </div>
            )}
            {isPan && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Enter PAN</span>
                <div className="w-[145px]">
                  <TextInput
                    value={pan}
                    isBold
                    onChange={(e) => setPan(e.target.value)}
                  />
                </div>
              </div>
            )}
            {text && <span className="text-2xl font-bold uppercase">{text}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
