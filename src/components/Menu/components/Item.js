import React from "react";
import { makeStyles } from "@material-ui/styles";

import Style from "../style/style";

const useStyle = makeStyles(Style);

function Item({ title, img }) {
  const classes = useStyle();

  return (
    <div className={classes.item}>
      <img src={img} alt={title} className={classes.itemImage}/>
      <div className={classes.itemTitle}>{title}</div>
    </div>
  );
}

export default Item;
