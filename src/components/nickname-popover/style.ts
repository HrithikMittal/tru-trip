import { css } from "@emotion/css";

export const getStyles = () => ({
  container: css`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #0000002b;
  `,
  innerContainer: css`
    background-color: white;
    width: 76%;
    height: 160px;
    margin: 10px;
    border-radius: 10px;
    top: 330px;
    box-shadow: 10px 10px 100px lightgrey;
    margin: 300px 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `,
  title: css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 22px;
    font-weight: 600;
  `,
  input: css`
    display: flex;
    justify-content: center;
    input {
      border-radius: 2px;
      border: 1px solid black;
      padding: 15px 2px;
      &:focus {
        outline: none;
      }
    }
  `,
  saveBtn: css`
    display: flex;
    padding: 10px;
    justify-content: center;
    button {
      width: 100%;
      /* margin: 10px; */
      height: 35px;
      border-radius: 10px;
      border: none;
      background-color: #ffddb7;
      font-weight: 500;
      font-size: 16px;
    }
  `,
});
