import styled from "styled-components";

export const ModalPrinterDeleteStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: rgba(0, 0, 23, 0.9);
  display: flex;
  align-items: start;
  justify-content: center;

  .btn-close-container {
    width: 100%;
    max-width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row-reverse;

    .btn-close {
      width: 3rem;
      height: 100%;
      text-align: center;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-size: 25px;
      font-weight: bold;
    }
  }

  .container {
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    .question-print {
      width: 100%;
      height: 100px;
      color: black;
      font-size: 28px;
      font-style: normal;
      text-align: center;
    }

    .btn-container {
      background-color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .btn-yes {
        border: solid;
        width: 5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        border-radius: 8px;
        cursor: pointer;
        background-color: green;
        color: white;
        font-weight: bold;
      }

      .btn-no {
        border: solid;
        width: 5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        cursor: pointer;
        background-color: red;
        color: white;
        font-weight: bold;
      }
    }
  }
`;
