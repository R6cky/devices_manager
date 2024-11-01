import styled from "styled-components";

export const RegisterStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  background-color: yellow;
  align-items: center;
  justify-content: center;

  form {
    width: 600px;
    height: 500px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #110f32;

    input {
      width: 80%;
      height: 50px;
      border-radius: 4px;
      font-size: 20px;
    }
    button {
      width: 80%;
      height: 50px;
      border-radius: 4px;
      font-size: 20px;
    }

    p {
      color: red;
    }
  }
`;
