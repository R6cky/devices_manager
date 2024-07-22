import { useContext, useEffect } from "react";
import { PrinterListStyled } from "./Styled";
import { PrinterItem } from "./printerItem/PrinterItem";
import { PrinterContext } from "../../../context/PrinterContext";

export const PrinterList = () => {
  const { printers, getPrinter } = useContext(PrinterContext);

  useEffect(() => {
    getPrinter();
  }, []);

  return (
    <PrinterListStyled>
      {printers.length > 0 ? (
        printers.map((elem) => {
          return <PrinterItem key={elem.id} printer={elem} />;
        })
      ) : (
        <p className="msg-void-list">Não há itens por aqui :-|</p>
      )}
    </PrinterListStyled>
  );
};
