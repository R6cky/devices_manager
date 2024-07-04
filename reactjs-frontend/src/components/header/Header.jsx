import { HeaderStyled } from "./Styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="top-header">
        <span className="logo">FIELDS - CNF</span>
      </div>

      <nav className="nav-bar">
        <ul className="list-menu">
          <li className="item-menu">Impressoras</li>
          <li className="item-menu">Tas</li>
          <li className="item-menu">Toners</li>
          <li className="item-menu">Computadores</li>
          <li className="item-menu">Bluebirds</li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
