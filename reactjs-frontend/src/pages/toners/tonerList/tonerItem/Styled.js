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
      color: white;
    }

    .toner-quant {
      font-size: 5rem;
      font-weight: bold;
      color: white;
    }
  }

  .remove-edit-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;

    .btn-edit {
      cursor: pointer;
    }

    .btn-remove {
      cursor: pointer;
    }
  }
`;
