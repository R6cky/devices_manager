import { Header } from "../../components/header/Header";
import { ComputerStyled } from "./Styled";
import { ComputerList } from "./computerList/ComputerList";

export const Computer = () => {
  return (
    <ComputerStyled>
      <Header />
      <ComputerList />
    </ComputerStyled>
  );
};
