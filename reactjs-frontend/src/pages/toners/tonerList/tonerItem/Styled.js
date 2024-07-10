import styled from "styled-components";

export const TonerItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 16rem;
  max-width: 100%;
  border: solid red;
  padding: 5px;
  margin: 20px;

  .item-content {
    border: solid green;
    height: 70%;
    margin-bottom: 30px;
    display: flex;
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

    .edit {
      width: 5rem;
      height: 3rem;
    }

    .remove {
      width: 5rem;
      height: 3rem;
    }
  }
`;
