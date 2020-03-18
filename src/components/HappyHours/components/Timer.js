import React from "react";
import { makeStyles } from "@material-ui/styles";
import Style from "../style/style";
import Item from "./Item";
const useStyle = makeStyles(Style);

function Timer() {
  const classes = useStyle();

  return (
    <div className={classes.timer}>
      <Item type="Days" number="30" />
      <Item type="Hours" number="15" />
      <Item type="Min" number="45" />
      <Item type="Sec" number="18" />
    </div>
  );
}

export default Timer;
