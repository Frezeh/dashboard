import "./logo.scss";
import Icon from "../../assets/logo.svg";
import Lendsqr from "../../assets/lendsqr.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={Icon} alt="logo" style={{ width: 24.75, height: 25 }} />
      <img src={Lendsqr} alt="lendsqr" style={{ width: 138.44, height: 36 }} />
    </div>
  );
}

export default Logo;
