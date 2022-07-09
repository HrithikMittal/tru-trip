import { css } from "@emotion/css";

export const getStyles = () => ({
  container: css`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#162136, #314157, #3a4960);
    height: 100vh;
  `,
  title: css`
    font-weight: 600;
    color: white;
    text-align: center;
    padding: 10px 10px 10px;
    font-size: 25px;
  `,
  imgContainer: css`
    background-color: #ffddb7;
    margin: 10px;
    border-radius: 10px;
  `,
  card: css`
    display: flex;
    background-color: white;
    border-radius: 10px;
    flex-direction: row;
    text-align: center;
    align-items: center;
    margin: 10px 10px 0px 10px;
    height: 140px;
    &::before {
      content: "";
      background-color: #2e3d54;
      height: 20px;
      position: absolute;
      width: 20px;
      top: 185px;
      border-radius: 0px 50px 10px 0px;
    }
    &::after {
      content: "";
      background-color: #2e3d54;
      height: 20px;
      position: absolute;
      width: 20px;
      top: 185px;
      border-radius: 50px 0px 10px 0px;
      right: 10px;
    }
  `,
  name: css`
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  pokemonName: css`
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
  `,
  chip: css``,
  bottomCard: css`
    background-color: #fefafa;
    display: flex;
    border-radius: 10px;
    margin: 0px 10px 10px;
    flex: 1;
    flex-direction: column;
    &::before {
      content: "";
      background-color: #2e3d54;
      height: 20px;
      width: 20px;
      top: 00px;
      border-radius: 0px 0px 100px 0px;
    }
    &::after {
      content: "";
      background-color: #2e3d54;
      height: 20px;
      width: 20px;
      border-radius: 0px 0px 0px 100px;
      right: 10px;
      position: absolute;
    }
  `,
  bottomCardTitle: css`
    display: flex;
    padding: 30px;
    font-size: 17px;
    font-weight: 600;
  `,
  info: css`
    display: flex;
    padding: 0px 25px;
    font-size: 15px;
    text-transform: capitalize;
  `,
  moves: css`
    flex: 1;
    row-gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  moveList: css`
    height: 400px;
    overflow: scroll;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  moveTitle: css`
    font-size: 15px;
    font-weight: 600;
  `,
  buttonContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
      margin: 10px;
      height: 35px;
      border-radius: 10px;
      border: none;
      background-color: #ffddb7;
      font-weight: 500;
      font-size: 16px;
    }
  `,
});
