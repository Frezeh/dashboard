import { useLocation } from "react-router-dom";

import "./generalDetails.scss";
import { Users } from "../../types";

function GeneralDetails() {
  const location = useLocation();
  const state: Users = location.state

  return (
    <div className="details__content">
      <div className="container">
        {/* Personal Information */}
        <div className="body">
          <h1>Personal Information</h1>
          <div className="content">
            <div className="content__body">
              <p>Full Name</p>
              <h1>{state.profile.firstName} {state.profile.lastName}</h1>
            </div>
            <div className="content__body">
              <p>Phone Number</p>
              <h1>{state.profile.phoneNumber}</h1>
            </div>
            <div className="content__body">
              <p>Email Address</p>
              <h1>{state.email}</h1>
            </div>
            <div className="content__body">
              <p>Bvn</p>
              <h1>{state.profile.bvn}</h1>
            </div>
            <div className="content__body">
              <p>Gender</p>
              <h1>{state.profile.gender}</h1>
            </div>
          </div>
          <div className="content">
            <div className="content__body">
              <p>Marital status</p>
              <h1>N/A</h1>
            </div>
            <div className="content__body">
              <p>Children</p>
              <h1>N/A</h1>
            </div>
            <div className="content__body">
              <p>Type of residence</p>
              <h1>N/A</h1>
            </div>
          </div>
          <div className="divider" />
        </div>

        {/* Education and Employment */}
        <div className="body">
          <h1>Education and Employment</h1>
          <div className="content">
            <div className="content__body">
              <p>level of education</p>
              <h1>{state.education.level}</h1>
            </div>
            <div className="content__body">
              <p>employment status</p>
              <h1>{state.education.employmentStatus}</h1>
            </div>
            <div className="content__body">
              <p>sector of employment</p>
              <h1>{state.education.sector}</h1>
            </div>
            <div className="content__body">
              <p>Duration of employment</p>
              <h1>{state.education.duration}</h1>
            </div>
          </div>
          <div className="content">
            <div className="content__body">
              <p>office email</p>
              <h1>{state.education.officeEmail}</h1>
            </div>
            <div className="content__body">
              <p>Monthly income</p>
              <h1>₦{state.education.monthlyIncome[0]} - ₦{state.education.monthlyIncome[1]}</h1>
            </div>
            <div className="content__body">
              <p>loan repayment</p>
              <h1>{state.education.loanRepayment}</h1>
            </div>
          </div>
          <div className="divider" />
        </div>

        {/* Socials */}
        <div className="body">
          <h1>Socials</h1>
          <div className="content">
            <div className="content__body">
              <p>Twitter</p>
              <h1>{state.socials.twitter}</h1>
            </div>
            <div className="content__body">
              <p>Facebook</p>
              <h1>{state.socials.facebook}</h1>
            </div>
            <div className="content__body">
              <p>Instagram</p>
              <h1>{state.socials.instagram}</h1>
            </div>
          </div>
          <div className="divider" />
        </div>

        {/* Guarantor */}
        <div className="body">
          <h1>Guarantor</h1>
          <div className="content">
            <div className="content__body">
              <p>Full Name</p>
              <h1>{state.guarantor.firstName} {state.guarantor.lastName}</h1>
            </div>
            <div className="content__body">
              <p>Phone Number</p>
              <h1>{state.guarantor.phoneNumber}</h1>
            </div>
            <div className="content__body">
              <p>Email Address</p>
              <h1>N/A</h1>
            </div>
            <div className="content__body">
              <p>Relationship</p>
              <h1>N/A</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralDetails;
