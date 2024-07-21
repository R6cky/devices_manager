import { useContext, useEffect } from "react";
import { ComputerContext } from "../../../context/ComputerContext";
import { ComputerListStyled } from "./Styled";
import { ComputerItem } from "./computerItem/ComputerItem";

export const ComputerList = () => {
  const { computers, getComputers } = useContext(ComputerContext);

  useEffect(() => {
    getComputers();
  }, []);

  return (
    <ComputerListStyled>
      {computers
        ? computers.map((elem) => {
            return <ComputerItem key={elem.id} computer={elem} />;
          })
        : false}
    </ComputerListStyled>
  );
};
