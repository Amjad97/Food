import React from "react";
import SelectedItem from "../../../images/selectedItem.png";
import { makeStyles } from "@material-ui/styles";

import style from "../style/style";

const useStyle = makeStyles(style);

function Item({ title, selected, setSelected, itemRef }) {
  const classes = useStyle();
  return (
    <div
      className={classes.navBarItem}
      onClick={() => {
        itemRef && window.scrollTo(0, itemRef.current.offsetTop);
        setSelected(title);
      }}
    >
      <img
        src={SelectedItem}
        alt="selected"
        className={
          selected === title ? classes.navbarSelectedItem : classes.notSelected
        }
      />
      <div className={classes.navBarText}>{title}</div>
    </div>
  );
}

export default Item;
