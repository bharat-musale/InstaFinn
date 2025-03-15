const dashboardData = [{ id: 0, status: "New Applications", count: 6 }, { id: 1, status: "Pending Applications", count: 12 }, { id: 2, status: "In Progress Applications", count: 14 }, { id: 3, status: "Rejected Applications", count: 4 }, { id: 4, status: "Completed Applications", count: 105 }, { id: 5, status: "Pending Applications", count: 6 }, { id: 6, status: "In Progress Applications", count: 6 }];

export const loanData = [
    {id: 1, loanType: "Home Loan", status: "Pre-approved", applicantName: "VIJAYPRASAD MOTILAL PARAB", cibilScore: 742, amount: "20,50,000" }, 
    {id: 2, loanType: "Home Loan", status: "Pre-approved", applicantName: "VIJAYPRASAD MOTILAL PARAB", cibilScore: 742, amount: "20,50,000" }, 
    {id: 3, loanType: "Home Loan", status: "Pre-approved", applicantName: "VIJAYPRASAD MOTILAL PARAB", cibilScore: 742, amount: "20,50,000" },
    {id: 4, loanType: "Home Loan", status: "Pre-approved", applicantName: "VIJAYPRASAD MOTILAL PARAB", cibilScore: 742, amount: "20,50,000" }];

export const subUserData = [
    { id: 1, phone: "+91 90000 00000", userType: "Sub User", name: "SACHIN MANIKCHAND PARSHI", rank: 2, totalBusiness: "11,00,000" }, 
    { id: 2, phone: "+91 90001 00001", userType: "Sub User", name: "RAHUL SHARMA", rank: 1, totalBusiness: "15,00,000" }, 
    { id: 3, phone: "+91 90002 00002", userType: "Sub User", name: "AMIT KUMAR", rank: 3, totalBusiness: "9,50,000" }, 
    { id: 4, phone: "+91 90003 00003", userType: "Sub User", name: "SUNIL VERMA", rank: 4, totalBusiness: "8,00,000" }];

export const userFormSections = [
    { title: "Personal Information", status: "Pending", content: "Fill in your personal details." },
    { title: "Family Details", status: "Pending", content: "Provide your family information." },
    { title: "Income Details", status: "Pending", content: "Share your income details." },
  ];
export const userData = [
    {id: 1, applicantName: "VIJAYPRASAD MOTILAL PARAB", applications: 742, amount: "20,50,000" }, 
    {id: 2, applicantName: "VIJAYPRASAD MOTILAL PARAB", applications: 742, amount: "20,50,000" }, 
    {id: 3, applicantName: "VIJAYPRASAD MOTILAL PARAB", applications: 742, amount: "20,50,000" },
    {id: 4, applicantName: "VIJAYPRASAD MOTILAL PARAB", applications: 742, amount: "20,50,000" }];
export const bankData = [
    { key: 1, bankType: "Public",isSetting: true, bankName: "State Bank of India", applications: 120, amount: 5000000 },
    { key: 2, bankType: "Private", bankName: "HDFC Bank", applications: 95, amount: 4200000 },
    { key: 3, bankType: "Public", bankName: "Punjab National Bank", applications: 80, amount: 3500000 },
    { key: 4, bankType: "Cooperative", bankName: "Saraswat Bank", applications: 60, amount: 2800000 },
    { key: 5, bankType: "Private", bankName: "ICICI Bank", applications: 110, amount: 4700000 }
    ];
export const allLoanTypes = ["Personal Loan", "Home Loan", "Car Loan", "Credit Card Loans", "Business Loan","Loan Against Property", "2 Wheeler Loan", "Small Business Loan", "Cash Credit", "Loan Against Securities", "Salary Loan", "Project Loan", "Agriculture Loan", "Cash Advances", "Gold Loan", "Education Loan"];
export const sidebarList = {
  dashboard: {
    role: ["masterAdmin", "agent", "subUser", "bank", "loanApplicant"],
    route: "/",
    icon: "dashboard",
    name: "Dashboard",
    value: "dashboard",
  },
  applications: {
    role: ["masterAdmin", "agent"],
    route: "/applications",
    icon: "applications",
    name: "Applications",
    value: "applications",
  },
  users: {
    role: ["masterAdmin", "agent"],
    route: "/applications?type=users",
    icon: "users",
    name: "Users",
    value: "users",
  },
  earning: {
    role: ["masterAdmin", "agent"],
    route: "/earning",
    icon: "earning",
    name: "Earning",
    value: "earning",
  },
  notifications: {
    role: ["masterAdmin", "agent"],
    route: "/acceptreject",
    icon: "notifications",
    name: "Notifications",
    value: "notifications",
  },
  lender: {
    role: ["masterAdmin", "agent"],
    route: "/lender",
    icon: "lender",
    name: "Lender",
    value: "lender",
  },
  bank: {
    role: ["masterAdmin"],
    route: "/applications?type=bank",
    icon: "bank",
    name: "Bank List",
    value: "bank",
  },
  profile: {
    role: ["masterAdmin", "agent", "subUser", "loanApplicant"],
    route: "/profile",
    icon: "user",
    name: "Profile",
    value: "profile",
  },
  help: {
    role: ["masterAdmin", "agent", "subUser", "bank", "loanApplicant"],
    route: "/help",
    icon: "help",
    name: "Help",
    value: "help",
  },
  setting: {
    role: ["masterAdmin"],
    route: "/setting",
    icon: "setting",
    name: "setting",
    value: "setting",
  },
  logout: {
    role: ["masterAdmin", "agent", "subUser", "loanApplicant"],
    // route: "/logout",
    icon: "logout",
    name: "Logout",
    value: "logout",
  },
};
// 'Dashboard', 'Applications', 'User', 'Earning', 'Notifications', 'Lender', 'Bank List', 'Profile', 'Help', 'setting', 'Logout'

export const investments = [
  { key: "stocks", value: "Stocks", description: "Equity investments representing ownership in companies." },
  { key: "bonds", value: "Bonds", description: "Fixed-income securities issued by governments or corporations." },
  { key: "mutual_funds", value: "Mutual Funds", description: "Professionally managed investment funds pooling money from investors." },
  { key: "fixed_deposits", value: "Fixed Deposits", description: "Bank deposits with fixed interest rates and maturity periods." },
  { key: "real_estate", value: "Real Estate", description: "Investments in physical properties like land, houses, or commercial buildings." },
  { key: "ppf", value: "Public Provident Fund (PPF)", description: "A long-term tax-saving investment with government-backed security." },
  { key: "cryptocurrencies", value: "Cryptocurrencies", description: "Digital assets like Bitcoin, Ethereum, and other blockchain-based currencies." },
  { key: "other", value: "Other", description: "Any other type of investment not listed here." }
];

     
export default dashboardData;
