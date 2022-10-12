import "./logo.scss";
import Icon from "../../assets/logo.svg";
import Lendsqr from "../../assets/lendsqr.svg";

function Logo(): JSX.Element {
  return (
    <div className="logo">
      <img src={Icon} alt="logo" className="logo__image" />
      <img src={Lendsqr} alt="lendsqr" className="logo__name" />
    </div>
  );
}

export default Logo;
