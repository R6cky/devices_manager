import styled from "styled-components";

export const ComputerStyled = styled.div`
  .btn-container {
    background-color: azure;
    height: 10rem;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .search {
      width: 450px;
      max-width: 100%;
      height: 50px;
      border-radius: 4px;
      padding: 10px;
      border: solid green 1px;
    }

    .btn-insert {
      border: solid 0.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      height: 3rem;
      padding: 8px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
    .btn-insert:hover {
      background-color: black;
      color: white;
    }

    .btn-search {
      font-size: 20px;
      padding: 5px;
    }
  }
`;
