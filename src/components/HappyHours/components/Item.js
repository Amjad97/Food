import React from "react";
import { makeStyles } from "@material-ui/styles";

import Style from "../style/style";

const useStyle = makeStyles(Style);

function Item({ type, number }) {
  const classes = useStyle();

  return (
    <div style={{ marginRight: "1em" }}>
      <div className={classes.number}>{number}</div>
      <div className={classes.type}>{type}</div>
    </div>
  );
}

export default Item;
