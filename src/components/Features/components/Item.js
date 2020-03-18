import React from "react";
import { makeStyles } from "@material-ui/styles";
import style from "../style/style";

import line from "../../../images/line2.png";

const useStyle = makeStyles(style);

function Item({ img, title, desc }) {
  const classes = useStyle();

  return (
    <div className={classes.item}>
      <img
        src={img}
        alt={title}
        style={{ alignSelf: "center", width: "30%", height: "30%" }}
      />
      <div
        className={classes.title}
      >
        {title}
      </div>
      <img src={line} alt={title} />
      <div className={classes.desc}>{desc}</div>
    </div>
  );
}

export default Item;
