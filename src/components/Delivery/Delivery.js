import React from "react";
import { makeStyles } from "@material-ui/styles";
import Bar from "../../images/deliveryBar.png";
import DeliveryMan from "../../images/deliveryMan.png";
import DownBar from "../../images/deliveryDownBar.png";
import deleviryBackground from "../../images/deleviryBackground.png";

import style from "./style/style";

const useStyle = makeStyles(style);

function Delivery() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <img src={Bar} alt="bar" className={classes.bar} />
      <div className={classes.subContainer}>
        <img src={DeliveryMan} alt="man" className={classes.deliveryMan} />
        <div className={classes.deliveryContainer}>
          <div className={classes.textContainer}>
            <img
              src={deleviryBackground}
              alt="man"
              className={classes.deliveryBg}
            />
            <div className={classes.text}>
              <div>We Guarantee</div>
              <div>30 Minutes Delivery</div>
            </div>
          </div>
          <div className={classes.note}>
            If you’re having a meeting, working late at night and need an extra
            push.
          </div>
          <div className={classes.note2}>Let us know and we will be there</div>
        </div>
      </div>
      <img src={DownBar} alt="bar" className={classes.downBar} />
    </div>
  );
}

export default Delivery;
