import Button from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav id={style.navbar}>
      <Logo />
      <Search />
      <Button />
    </nav>
  );
};

export default Navbar;
