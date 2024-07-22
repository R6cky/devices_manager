import { useContext, useEffect } from "react";
import { TasListStyled } from "./Styled";
import { TasItem } from "./tasItem/TasItem";
import { TasContext } from "../../../context/TasContext";

export const TasList = () => {
  const { tas, getTas } = useContext(TasContext);

  useEffect(() => {
    getTas();
  }, []);

  return (
    <TasListStyled>
      {tas ? (
        tas.map((elem) => {
          return <TasItem key={elem.id} tas={elem} />;
        })
      ) : (
        <span>null</span>
      )}
    </TasListStyled>
  );
};
