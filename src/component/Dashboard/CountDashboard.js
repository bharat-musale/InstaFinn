import dashboardData from "@/app/data";
import PageHeader from "../Header/PageHeader";


const CountDashboard = () => {
    return (
        <>
        <PageHeader collapsed={false} title="Dashboard" />
        <div className="flex-1 flex flex-col items-center">
          <div className="container-div m-4 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.isArray(dashboardData) &&
              dashboardData.map((item, index) => {
                const borderColors = {
                  "New Applications": "border-pink-300",
                  "Pending Applications": "border-yellow-300",
                  "In Process Applications": "border-blue-300",
                  "Rejected Applications": "border-red-300",
                  "Completed Applications": "border-green-300",
                };

                return (
                  <div key={index} className={`rounded-lg overflow-hidden shadow-md bg-white p-4 flex flex-col text-center border-2 ${borderColors[item.status] || "border-gray-300"}`}>
                    <span className="text-md mb-2 text-black-600">
                      {item.status.toUpperCase()}
                    </span>
                    <span className="text-2xl font-bold">{item.count}</span>
                  </div>
                );
              })}
          </div>
        </div>
        </>
    )
}

export default CountDashboard