import styled from "styled-components";

export const TonerItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 25rem;
  max-width: 100%;
  border: solid red;
  padding: 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .item-content {
    border: solid green;
    height: 70%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 3rem;
      max-width: 100%;
    }
  }

  .item-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .add {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      font-weight: bold;
      font-size: 2rem;
      border: none;
    }

    .remove {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      font-weight: bold;
      font-size: 2rem;
      border: none;
    }
    :hover {
      background-color: black;
      color: white;
      border: none;
    }
  }

  .remove-edit-container {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    border: solid red;
  }
`;
