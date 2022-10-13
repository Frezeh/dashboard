import { useState, useContext, useEffect, useRef, FormEvent } from "react";
import "./modal.scss";
import { UsersActionsContext, UsersContext } from "../../context/userContext";
import { SortModalProps } from "../../types";

//use form
export default function SortModal({
  setSortModal,
}: SortModalProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { users } = useContext(UsersContext);
  const { sortUser } = useContext(UsersActionsContext);
  const [organization, setOrganization] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    function handleClickOutside(this: Document, e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setSortModal(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    const handleEscapeButton = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSortModal(-1);
      }
    };
    window.addEventListener("keydown", handleEscapeButton);
    return () => window.removeEventListener("keydown", handleEscapeButton);
  }, []);

  const formData = {
    orgName: organization,
    userName: username,
    email,
    phoneNumber: phone,
    createdAt: date,
    status,
  };

  const handleReset = () => {
    setOrganization("");
    setUsername("");
    setEmail("");
    setDate("");
    setPhone("");
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // filter out empty values
    const nonEmptyValues = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );

    sortUser(nonEmptyValues);
  };

  return (
    <div className="sort__container" ref={wrapperRef}>
      <div className="sort__body">
        <form onSubmit={handleSubmit}>
          <div className="sort__form">
            <p>Organization</p>
            <div>
              <select
                name="organization"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              >
                <option selected hidden>
                  select
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.orgName}>
                    {user.orgName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="sort__form">
            <p>Username</p>
            <input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="sort__form">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sort__form">
            <p>Date</p>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="sort__form">
            <p>Phone Number</p>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="sort__form">
            <p>Status</p>
            <div>
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option selected hidden>
                  select
                </option>
                <option value={"Active"}>Active</option>
                <option value={"Inactive"}>Inactive</option>
                <option value={"Blacklisted"}>Blacklisted</option>
              </select>
            </div>
          </div>
          <div className="sort__button">
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="filter">
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
