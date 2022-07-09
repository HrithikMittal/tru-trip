import React from "react";
import { getStyles } from "./style";
import { INickName } from "../../utils/types";

const NicknamePopover = (props: INickName) => {
  const { name, nickName, setNickName, handleSave } = props;

  const classes = getStyles();

  const handleOnChange = (e: any) => {
    setNickName(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.title}>Nickname for your {name}</div>
        <div className={classes.input}>
          <input value={nickName} onChange={handleOnChange} />
        </div>
        <div className={classes.saveBtn}>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NicknamePopover;
