import styled from "styled-components";

export const BluebirdStyled = styled.div`
  .btn-container {
    background-color: azure;
    height: 5rem;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-insert {
      border: solid 0.5px;
      height: 3rem;
      padding: 8px;
      border-radius: 8px;
      font-weight: bold;
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .btn-insert:hover {
      background-color: black;
      color: white;
    }
  }
`;
