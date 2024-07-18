import { HeaderStyled } from "./Styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="top-header">
        <span className="logo">DEVICES | MANAGER</span>
      </div>

      <nav className="nav-bar">
        <ul className="list-menu">
          <li className="item-menu">
            <Link to={"/printer"}>Impressoras</Link>
          </li>
          <li className="item-menu">
            <Link to={"/tas"}>Tas</Link>
          </li>
          <li className="item-menu">
            <Link to={"/toner"}>Toners</Link>
          </li>
          <li className="item-menu">
            <Link to={"/computer"}>computadores</Link>
          </li>
          <li className="item-menu">
            <Link to={"/bluebird"}>bluebirds</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
