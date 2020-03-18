import React from "react";
import { makeStyles } from "@material-ui/styles";
import MenuData from "./components/MenuData";
import Style from "./style/style";
import Brush from "../../images/Brush.png";

const useStyle = makeStyles(Style);

function Menu() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.title}>Want To Eat?</div>
      <img src={Brush} alt="brush" className={classes.brush} />
      <div className={classes.subTitle}>
        Try our Most Delicious food and it usually take minutes to deliver!
      </div>
      <MenuData />
    </div>
  );
}

export default Menu;
