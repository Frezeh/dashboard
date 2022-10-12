import { Dispatch, SetStateAction, ReactNode, MutableRefObject } from "react";

export type DashboardData = {
  id: number;
  name: string;
  image: string;
};

export type DashboardLayoutProps = {
  children: ReactNode;
};

export type Users = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
  status?: string;
};

export type UserState = {
  users: Users[];
  isAuthenticated: boolean;
};

export type UsersProviderProps = { children?: ReactNode };

export type UserActions = {
  loadUserData: () => void;
  blacklistUser: (id: string) => void;
  activateUser: (id: string) => void;
  loginUser: () => void;
};

export type usePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export type PaginationProps = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
};

export type TableProps = {
  currentTableData: Users[]
};

export type SortModalProps = {
  setSortModal: Dispatch<SetStateAction<number>>;
};

export type SelectModalProps = {
  selectModal: string;
  setSelectModal: Dispatch<SetStateAction<string>>;
  user: Users;
};