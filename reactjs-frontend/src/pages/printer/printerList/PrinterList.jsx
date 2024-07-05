import { useContext, useEffect } from "react";
import { PrinterListStyled } from "./Styled";
import { PrinterItem } from "./printerItem/PrinterItem";
import { PrinterContext } from "../../../context/PrinterContext";

export const PrinterList = () => {
  const { printer, getPrinter } = useContext(PrinterContext);

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
