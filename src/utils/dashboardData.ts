import { DashboardData } from "../types";
import Briefcase from "../assets/briefcase.svg";

export const customers: DashboardData[] = [
  { id: 0, name: "Users", image: Briefcase },
  { id: 1, name: "Guarantors", image: Briefcase },
  { id: 2, name: "Loans", image: Briefcase },
  { id: 3, name: "Decision Models", image: Briefcase },
  { id: 4, name: "Savings", image: Briefcase },
  { id: 5, name: "Loan Requests", image: Briefcase },
  { id: 6, name: "Whitelist", image: Briefcase },
  { id: 7, name: "Karma", image: Briefcase },
];

export const businesses: DashboardData[] = [
  { id: 0, name: "Organization", image: Briefcase },
  { id: 1, name: "Loan Products", image: Briefcase },
  { id: 2, name: "Savings Products", image: Briefcase },
  { id: 3, name: "Fees and Charges", image: Briefcase },
  { id: 4, name: "Transactions", image: Briefcase },
  { id: 5, name: "Services", image: Briefcase },
  { id: 6, name: "Service Account", image: Briefcase },
  { id: 7, name: "Settlements", image: Briefcase },
  { id: 8, name: "Reports", image: Briefcase },
];

export const settings: DashboardData[] = [
  { id: 0, name: "Preferences", image: Briefcase },
  { id: 1, name: "Fees and Pricing", image: Briefcase },
  { id: 2, name: "Audit Logs", image: Briefcase },
];

export const NavDetailsData = [
  { id: 0, name: "General Details" },
  { id: 1, name: "Documents" },
  { id: 2, name: "Bank Details" },
  { id: 3, name: "Loans" },
  { id: 4, name: "Savings" },
  { id: 5, name: "App and System" },
];
