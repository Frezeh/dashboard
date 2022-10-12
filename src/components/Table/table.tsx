import { useState } from "react";

import { TableProps } from "../../types";
import "./table.scss";
import Filter from "../../assets/sort.svg";
import Select from "../../assets/select.svg";
import Pills from "../Pills/pills";
import SelectModal from "../Modal/selectModal";
import SortModal from "../Modal/sortModal";
import { parseDate } from "../../utils/parseDate";

const TablaHeader = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

export const Table = ({ currentTableData }: TableProps): JSX.Element => {
  const [selectModal, setSelectModal] = useState<string>("");
  const [sortModal, setSortModal] = useState<number>(-1);

  return (
    <>
      <table>
        <thead>
          <tr>
            {TablaHeader.map((name, index) => (
              <th key={index}>
                <div>
                  <p>{name}</p>
                  <img
                    src={Filter}
                    alt="filter"
                    onClick={() => setSortModal(index)}
                  />
                </div>

                {sortModal === index && (
                  <div className="select__modal">
                    <SortModal setSortModal={setSortModal} />
                  </div>
                )}
              </th>
            ))}
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((user) => [
            <tr key={user.id}>
              <td>
                <p>{user.orgName}</p>
              </td>
              <td>
                <p>{user.userName}</p>
              </td>
              <td>
                <p>{user.email}</p>
              </td>
              <td>
                <p>{user.phoneNumber}</p>
              </td>
              <td>
                <p>{parseDate(user.createdAt)}</p>
              </td>
              <td>
                <Pills status={user.status} />
              </td>
              <td>
                <img
                  src={Select}
                  alt="select"
                  onClick={() => setSelectModal(user.id)}
                />
              </td>
              {selectModal === user.id && (
                <div className="select__modal">
                  <SelectModal
                    setSelectModal={setSelectModal}
                    selectModal={selectModal}
                    user={user}
                  />
                </div>
              )}
            </tr>,
            <div className="table__divider" key={user.id + 1} />,
            // <tr key={(user.id) + 1} className="table__divider">
            //   <td>www</td>
            // </tr>,
          ])}
        </tbody>
      </table>
    </>
  );
};
