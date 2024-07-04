import styled from "styled-components";

export const ComputerItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 28rem;
  max-width: 100%;
  border: solid red;
  padding: 5px;
  margin: 20px;

  .item-content {
    border: solid green;
    height: 70%;
    margin-bottom: 30px;

    .item-content-serialname {
    }

    .item-content-hostname {
    }
    .item-content-fixdate {
    }

    .item-content-description {
      border: solid red;
      width: 100%;
      height: 200px;
      overflow-x: hidden;
      display: flex;
      flex-wrap: wrap;
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
