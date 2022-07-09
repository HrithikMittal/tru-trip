import { css } from "@emotion/css";

export const getStyles = () => ({
  container: css`
    height: 100vh;
    background-image: linear-gradient(#162136, #314157, #3a4960);
  `,
  title: css`
    font-weight: 600;
    color: white;
    text-align: center;
    padding: 10px 10px 10px;
    font-size: 25px;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #162136;
  `,
  list: css`
    margin: 50px 0px 0px;
    background-image: linear-gradient(#162136, #314157, #3a4960);
  `,
});
