import "./sideMenu.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Briefcase from "../../assets/briefcase.svg";
import Dropdown from "../../assets/dropdown.svg";
import { businesses, customers, settings } from "../../utils/dashboardData";

function SideMenu() {
  const [active, setActive] = useState<string>("Users");
  const navigate = useNavigate();

  const handleSwitch = (name: string) => {
    setActive(name);
    navigate(`/dashboard/${name.toLowerCase()}`);
  };

  return (
    <div className="sidemenu">
      <div className="sidemenu__row">
        <img src={Briefcase} alt={"briefcase"} />
        <p>Switch Organization</p>
        <img src={Dropdown} alt={"dropdown"} />
      </div>

      <div className="sidemenu__row">
        <img src={Briefcase} alt={"briefcase"} />
        <p>Dashboard</p>
      </div>

      <div className="sidemenu__content">
        <h1>CUSTOMERS</h1>
        {customers.map((data) => (
          <div
            className={
              active === data.name ? "sidemenu__active" : "sidemenu__inactive"
            }
            onClick={() => handleSwitch(data.name)}
            key={data.id}
          >
            <div />
            <img src={data.image} alt={data.name} />
            <p>{data.name}</p>
          </div>
        ))}
      </div>

      <div className="sidemenu__content">
        <h1>BUSINESSES</h1>
        {businesses.map((data) => (
          <div
            className={active === data.name ? "sidemenu__active" : "sidemenu__inactive"}
            onClick={() => handleSwitch(data.name)}
            key={data.id}
          >
            <div />
            <img src={data.image} alt={data.name} />
            <p>{data.name}</p>
          </div>
        ))}
      </div>

      <div className="sidemenu__content">
        <h1>SETTINGS</h1>
        {settings.map((data) => (
          <div
            className={active === data.name ? "sidemenu__active" : "sidemenu__inactive"}
            onClick={() => handleSwitch(data.name)}
            key={data.id}
          >
            <div />
            <img src={data.image} alt={data.name} />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
