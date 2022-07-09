import { css } from "@emotion/css";

export const getStyles = () => ({
  container: css`
    display: flex;
    height: 50px;
    padding: 10px;
    background-color: #eaf0f7;
    margin: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `,
  img: css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 20px;
  `,
  removeBtn: css`
    margin-left: 10px;
    background-color: #ffddb7;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
  `,
});
