import { useContext, useEffect } from "react";
import { Printerontext } from "../../../context/Printerontext";
import { PrinteristStyled } from "./Styled";
import { Printertem } from "./Printertem/Printertem";

export const Printerist = () => {
  const { printer, getPrinter } = useContext(Printerontext);

  useEffect(() => {
    getPrinter();
  }, []);

  return (
    <PrinteristStyled>
      {printer.data
        ? printer.data.map((elem) => {
            return <Printertem key={elem.id} printer={elem} />;
          })
        : false}
    </PrinteristStyled>
  );
};
