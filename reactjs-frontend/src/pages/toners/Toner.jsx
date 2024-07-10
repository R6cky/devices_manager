import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { TonerStyled } from "./Styled";
import { TonerList } from "./tonerList/TonerList";

export const Toner = () => {
  return (
    <TonerStyled>
      <Header />
      <div className="btn-container">
        <span className="btn-insert" onClick={() => setModalCreateIsOpen(true)}>
          Inserir Toner
        </span>
      </div>
      {/* <div className="select-container">
        <select name="" id="" className="select-toner">
          <option value="" className="option-toner">
            W9037MC
          </option>
          <option value="">203U</option>
          <option value="">358S</option>
          <option value="">W9004mz</option>
          <option value="">C506L</option>
          <option value="">Y506L</option>
          <option value="">W9061MC</option>
          <option value="">W9008MZ</option>
          <option value="">W9063</option>
          <option value="">M506L</option>
          <option value="">K506L</option>
          <option value="">W9060MC</option>
          <option value="">W9062MC</option>
          <option value="">201L</option>
          <option value="">R304</option>
          <option value="">304E</option>
          <option value="">307U</option>
          <option value="">309E</option>
        </select>
      </div>
      <div className="body-toner"></div> */}
      <TonerList />
      <Footer />
    </TonerStyled>
  );
};
