import styled from "styled-components";

export const RegisterStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: yellow;
  align-items: center;

  form {
    margin-top: 100px;
    width: 600px;
    height: 500px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #110f32;

    .title-form {
      width: 80%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: start;
      padding-left: 8px;
      border-radius: 4px;

      h3 {
        color: white;
        font-size: 24px;
      }
    }

    .input-mail {
      width: 80%;
      height: 90px;
      border-radius: 4px;
      font-size: 20px;

      input {
        width: 100%;
        height: 60px;
        border-radius: 4px;
        font-size: 20px;
        padding-left: 8px;
      }

      p {
        color: white;
        font-size: 20px;
        font-weight: bold;
      }
    }

    .input-password {
      width: 80%;
      height: 90px;
      border-radius: 4px;
      font-size: 20px;

      input {
        width: 100%;
        height: 60px;
        border-radius: 4px;
        font-size: 20px;
        padding-left: 8px;
      }

      p {
        color: white;
        font-size: 20px;
        font-weight: bold;
      }
    }
    button {
      width: 80%;
      height: 60px;
      border-radius: 4px;
      font-size: 20px;
    }

    p {
      color: red;
    }
  }
`;
