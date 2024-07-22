import { useContext, useEffect } from "react";
import { BluebirdContext } from "../../../context/BluebirdContext";
import { BluebirdListStyled } from "./Styled";
import { BluebirdItem } from "./bluebirdItem/BluebirdItem";

export const BluebirdList = () => {
  const { bluebirds, getBluebirds } = useContext(BluebirdContext);

  useEffect(() => {
    getBluebirds();
  }, []);

  return (
    <BluebirdListStyled>
      {bluebirds.length > 0 ? (
        bluebirds.map((elem) => {
          return <BluebirdItem key={elem.id} bluebird={elem} />;
        })
      ) : (
        <p className="msg-void-list">Não há itens por aqui :-|</p>
      )}
    </BluebirdListStyled>
  );
};
