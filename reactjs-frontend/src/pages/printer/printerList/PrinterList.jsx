import { useContext, useEffect } from "react";
import { Printerontext } from "../../../context/Printerontext";
import { PrinterListStyled } from "./Styled";
import { PrinterItem } from "./PrinterItem/PrinterItem";

export const PrinterList = () => {
  const { printer, getPrinter } = useContext(Printerontext);

  useEffect(() => {
    getPrinter();
  }, []);

  return (
    <PrinterListStyled>
      {printer.data
        ? printer.data.map((elem) => {
            return <PrinterItem key={elem.id} printer={elem} />;
          })
        : false}
    </PrinterListStyled>
  );
};
