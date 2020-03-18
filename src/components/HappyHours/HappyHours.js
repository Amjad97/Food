import React from "react";
import { makeStyles } from "@material-ui/styles";
import Style from "./style/style";
import HappyHoursBg from "../../images/happyHoursBg.png";
import topBar from "../../images/topBar.png";
import downBar from "../../images/downBar.png";
import Timer from "./components/Timer";

const useStyle = makeStyles(Style);

function HappyHours() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img src={HappyHoursBg} alt="bg" className={classes.backgroundImage} />
      <img src={topBar} alt="bg" className={classes.topBar} />
      <img src={downBar} alt="bg" className={classes.downBar} />
      <div className={classes.subContainer}>
        <div className={classes.mainText}>Happy Hours</div>
        <div style={{marginTop:'2em'}}>
          
        <div className={classes.text}>Friday 5pm – 8pm</div>
        <div className={classes.text}>40% off All premium pizzas</div>
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default HappyHours;
