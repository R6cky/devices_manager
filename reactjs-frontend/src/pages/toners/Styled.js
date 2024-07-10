import styled from "styled-components";

export const TonerStyled = styled.div`
  .select-container {
    border: solid red;
    width: 100%;
    max-width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    }
  }

  .select-toner {
    width: 400px;
    height: 100%;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    display: flex;
    background-color: aliceblue;

    opton {
      height: 100px;
    }
  }

  .body-toner {
    width: 100%;
    height: 100vh;
  }
`;
