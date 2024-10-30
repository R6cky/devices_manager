import { useContext } from "react";
import { HeaderStyled } from "./Styled";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export const Header = () => {
  const { clearUser } = useContext(UserContext);
  return (
    <HeaderStyled>
      <div className="top-header">
        <div className="div-btn-exit">
          <span onClick={() => clearUser()}>Sair</span>
        </div>
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
