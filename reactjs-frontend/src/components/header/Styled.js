import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 100%;
  height: 300px;
  max-height: 100%;
  background-color: #00000c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  .top-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
  }

  .nav-bar {
    border: solid yellow 1px;
    width: 100%;
    max-width: 100%;
    height: 200px;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 20px;
      color: blue;

      li {
        width: 200px;
        height: 60px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        cursor: pointer;
        font-weight: bold;

        a {
          text-decoration: none;
          color: black;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      :hover {
        background-color: #00000c;
        color: white;
        border: solid white 1px;
      }
    }
  }
`;
