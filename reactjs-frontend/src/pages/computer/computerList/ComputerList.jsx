import { useContext, useEffect } from "react";
import { ComputerContext } from "../../../context/ComputerContext";
import { ComputerListStyled } from "./Styled";
import { ComputerItem } from "./ComputerItem/ComputerItem";

export const ComputerList = () => {
  const { computers, getComputers } = useContext(ComputerContext);

  useEffect(() => {
    getComputers();
  }, []);

  return (
    <ComputerListStyled>
      {computers.data
        ? computers.data.map((elem) => {
            return <ComputerItem key={elem.id} computer={elem} />;
          })
        : false}
    </ComputerListStyled>
  );
};
