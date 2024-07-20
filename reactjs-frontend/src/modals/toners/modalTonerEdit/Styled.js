import styled from "styled-components";

export const ModalTonerEditStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: rgba(0, 0, 23, 0.9);

  span {
    font-size: 3rem;
    font-weight: bold;
    background-color: white;
    color: black;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  h4 {
    font-size: 3rem;
  }

  .form-toner {
    border: solid white 0.1px;
    width: 38rem;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgba(0, 0, 23, 0.9);

    .error-msg {
      color: yellow;
      width: 100%;
      height: 30px;
    }

    .input-container {
      margin: 0 auto;
      width: 80%;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .toner-change-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 13rem;
        height: 6rem;

        p {
          text-align: center;
        }

        .toner-input {
          width: 5rem;
          border-radius: 4px;
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
        }
      }

      input {
        width: 100%;
        height: 3.5rem;
        font-size: 18px;
      }

      .btn-send {
        cursor: pointer;
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
