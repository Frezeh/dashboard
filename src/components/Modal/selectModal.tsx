import "./modal.scss";
import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Eye from "../../assets/eye.svg";
import Blacklist from "../../assets/blacklist.svg";
import Activate from "../../assets/activate.svg";
import { SelectModalProps } from "../../types";
import { UsersActionsContext } from "../../context/userContext";

export default function SelectModal({
  selectModal,
  setSelectModal,
  user,
}: SelectModalProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { blacklistUser, activateUser } = useContext(UsersActionsContext);
  const navigate = useNavigate();

  // use to handle click outside 
  useEffect(() => {
    function handleClickOutside(this: Document, e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setSelectModal("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // use to handle click escape botton 
  useEffect(() => {
    const handleEscapeButton = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectModal("");
      }
    };
    window.addEventListener("keydown", handleEscapeButton);
    return () => window.removeEventListener("keydown", handleEscapeButton);
  }, []);

  return (
    <div className="select__container" ref={wrapperRef} onClick={() => setSelectModal("")}>
      <div className="select__body">
        <div
          className="select__row"
          onClick={(() => navigate(`/dashboard/user/${selectModal}`, { state: user }))}
        >
          <img src={Eye} alt="eye" />
          <p>View Details</p>
        </div>
        <div className="select__row" onClick={() => blacklistUser(user.id)}>
          <img src={Blacklist} alt="blacklist" />
          <p>Blacklist User</p>
        </div>
        <div className="select__row" onClick={() => activateUser(user.id)}>
          <img src={Activate} alt="activate" />
          <p>Activate User</p>
        </div>
      </div>
    </div>
  );
}
