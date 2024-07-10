import { useContext, useEffect } from "react";
import { TonerListStyled } from "./Styled";
import { TonerItem } from "./tonerItem/TonerItem";
import { TonerContext } from "../../../context/TonerContext";

export const TonerList = () => {
  const { toner, getToner } = useContext(TonerContext);

  useEffect(() => {
    getToner();
  }, []);

  return (
    <TonerListStyled>
      {toner.data ? (
        toner.data.map((elem) => {
          return <TonerItem key={elem.id} toner={elem} />;
        })
      ) : (
        <span>null</span>
      )}
    </TonerListStyled>
  );
};
