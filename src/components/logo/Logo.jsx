import LogoImage from "../../assets/logo.png"

import style from "../navbar/Navbar.module.css";
const Logo = () => {
  return (
    <img src={LogoImage} alt="logo" width={67} className={style.logo} />
  );
}

export default Logo