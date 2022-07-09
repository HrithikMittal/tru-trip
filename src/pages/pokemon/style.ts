import { css } from "@emotion/css";

export const getStyles = () => ({
  container: css`
    background-image: linear-gradient(#162136, #314157, #3a4960);
  `,
  title: css`
    font-weight: 600;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #162136;
    display: flex;
    flex-direction: row;
  `,
  mTitle: css`
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 25px;
    padding-left: 130px;
  `,
  subTitle: css`
    justify-content: center;
    display: flex;
    align-items: center;
    padding-right: 30px;
  `,
  list: css`
    margin: 50px 0px 0px;
    background-image: linear-gradient(#162136, #314157, #3a4960);
  `,
  pokemonList: css`
    margin: 50px 0px 0px;
    background-image: linear-gradient(#162136, #314157, #3a4960);
    height: 100vh;
  `,
  empty: css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    padding: 100px;
    height: 75vh;
  `,
});
