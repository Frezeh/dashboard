import "./dashboard.scss";
import { useState } from "react";

import Logo from "../Logo/logo";
import SideMenu from "../SideMenu/sideMenu";
import Alarm from "../../assets/alarm.png";
import Search from "../../assets/search.svg";
import Dropdown from "../../assets/dropdownSmall.svg";
import Image from "../../assets/image.svg";
import { DashboardLayoutProps } from "../../types";

function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      {/* Header */}
      <div className="dashboard__header">
        <Logo />

        <div className="dashboard__search">
          <input
            type="text"
            placeholder="Search for anything"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="dashboard__search__icon">
            <img src={Search} alt="search" />
          </div>
        </div>

        <div className="dashboard__end">
          <h1>Docs</h1>
          <img src={Alarm} alt="alert" />
          <div>
            <img src={Image} alt="alert" className="dashboard__avatar" />
            <p>Adedeji</p>
            <img src={Dropdown} alt="dropdown" style={{ marginTop: 10 }} />
          </div>
        </div>
      </div>

      <div className="dashboard__body">
        {/* Sidebar */}
        <div className="dashboard__sidemenu">
          <SideMenu />
        </div>

        {/* Content */}
        <div className="dashboard__content">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
