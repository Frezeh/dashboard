import "./userDetails.scss";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BackArrow from "../../../../assets/backArrow.svg";
import Avatar from "../../../../assets/avatar.svg";
import StarFilled from "../../../../assets/starFilled.svg";
import StarEmpty from "../../../../assets/starEmpty.svg";
import { NavDetailsData } from "../../../../utils/dashboardData";
import GeneralDetails from "../../../../components/GeneralDetails/generalDetails";
import { Users } from "../../../../types";
import { UsersActionsContext } from "../../../../context/userContext";

function UserDetails(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const state: Users = location.state;
  const { blacklistUser, activateUser } = useContext(UsersActionsContext);
  const [navDetails, setNavDetails] = useState<string>("General Details");

  return (
    <div className="userdetails__container">
      <div className="userdetails__header" onClick={() => navigate(-1)}>
        <img src={BackArrow} alt="arrow" />
        <p>Back to Users</p>
      </div>

      <div className="userdetails__subheader">
        <h1>User Details</h1>
        <div className="userdetails__header__button">
          <button
            className="userdetails__blacklist"
            onClick={() => blacklistUser(state.id)}
          >
            Blacklist User
          </button>
          <button
            className="userdetails__activate"
            onClick={() => activateUser(state.id)}
          >
            Activate User
          </button>
        </div>
      </div>

      <div className="userdetails__topcard">
        <div className="topcard__body">
          <div className="topcard__boby__top">
            <img src={Avatar} alt="avatar" className="avatar" />
            <div className="topcard__left">
              <h1>
                {state.profile.firstName} {state.profile.lastName}
              </h1>
              <p>{state.accountNumber}</p>
            </div>
            <div className="divider"></div>
            <div className="topcard__middle">
              <h1>User’s Tier</h1>
              <div>
                <img src={StarFilled} alt="starfilled" />
                <img src={StarEmpty} alt="starempty" />
                <img src={StarEmpty} alt="starempty" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="topcard__right">
              <h1>₦{state.accountBalance}</h1>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
        </div>

        <div className="topcard__body__nav">
          {NavDetailsData.map((data) => (
            <div
              className={
                navDetails === data.name ? "nav__active" : "nav__inactive"
              }
              key={data.id}
              onClick={() => setNavDetails(data.name)}
            >
              <p>{data.name}</p>
              <div className="nav__bottom" />
            </div>
          ))}
        </div>
      </div>

      {navDetails === "General Details" && <GeneralDetails />}
    </div>
  );
}

export default UserDetails;
