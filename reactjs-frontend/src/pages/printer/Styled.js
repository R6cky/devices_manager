import styled from "styled-components";

export const PrinterStyled = styled.div`
  .btn-container {
    background-color: azure;
    height: 5rem;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-insert {
      border: solid;
      height: 3rem;
      padding: 8px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      border: solid 0.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
    }
    .btn-insert:hover {
      background-color: black;
      color: white;
    }
  }
`;
