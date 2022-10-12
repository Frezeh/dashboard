import "./user.scss";
import { useState, useMemo, useContext, useEffect } from "react";

import Pagination from "../../../../components/Pagination/paginate";
import { UsersActionsContext, UsersContext } from "../../../../context/userContext";
import UserIcon from "../../../../assets/users.svg";
import ActiveUserIcon from "../../../../assets/activeUsers.svg";
import LoanIcon from "../../../../assets/loans.svg";
import SavvingsIcon from "../../../../assets/savings.svg";
import Dropdown from "../../../../assets/dropdown.svg";
import { Table } from "../../../../components/Table/table";

let PageSize = 10;

export default function User(): JSX.Element {
  const { users } = useContext(UsersContext);
  const { loadUserData } = useContext(UsersActionsContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    //Load the user data when component mounts.
    loadUserData();
  }, []);

  return (
    <div className="user__container">
      <h1>Users</h1>

      {users.length === 0 ? (
        <div className="user__loader" />
      ) : (
        <>
          {/* Cards */}
          <div className="user__topcard">
            <div className="user__topcard__users">
              <img src={UserIcon} alt="user" />
              <p>Users</p>
              <h1>{users.length}</h1>
            </div>
            <div className="user__topcard__users">
              <img src={ActiveUserIcon} alt="activeuser" />
              <p>Active Users</p>
              <h1>{users.filter((user) => user.status === "Active").length}</h1>
            </div>
            <div className="user__topcard__users">
              <img src={LoanIcon} alt="loans" />
              <p>Users with Loans</p>
              <h1>
                {
                  users.filter(
                    (user) => Number(user.education.loanRepayment) > 0
                  ).length
                }
              </h1>
            </div>
            <div className="user__topcard__users">
              <img src={SavvingsIcon} alt="savings" />
              <p>Users with Savings</p>
              <h1>0</h1>
            </div>
          </div>

          {/* Table */}
          <Table currentTableData={currentTableData} />

          {/* Pagination */}
          {/* <div className="user__bottom">
            <div className="user__bottom__left">
              <p>Showing</p>
              <div className="user__bottom__layout">
                <p>100</p>
                <img src={Dropdown} alt="dropdown" />
              </div>
              <p>Out of {users.length}</p>
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={users.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div> */}
        </>
      )}
    </div>
  );
}
