import styled from "styled-components";

export const ModalTasEditStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: rgba(0, 0, 23, 0.9);

  .form-tas {
    border: solid white 0.1px;
    width: 38rem;
    max-width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgba(0, 0, 23, 0.9);

    .input-container {
      margin: 0 auto;
      width: 80%;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .input-container-hostname {
        width: 100%;
      }

      .input-container-wifiname {
        width: 100%;
      }

      input {
        width: 100%;
        height: 3.5rem;
        font-size: 18px;
      }

      .btn-send {
        cursor: pointer;
      }

      .error-msg {
        color: yellow;
        width: 100%;
        height: 30px;
      }
    }
    .btn-close {
      color: white;
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: row-reverse;

      span {
        width: 3rem;
        height: 3rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        background-color: white;
        color: black;
        cursor: pointer;
        margin: 10px;
      }
    }
  }
`;
