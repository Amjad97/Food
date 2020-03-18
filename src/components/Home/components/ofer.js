/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { makeStyles } from "@material-ui/styles";
import style from "../style/style";
import oferBg from "../../../images/oferBg.png";
const useStyle = makeStyles(style);

function ofer(props) {
  const classes = useStyle(props);

  return (
    <div className={classes.oferContainer}>
      <div className={classes.ofer}>
        <img src={oferBg} alt="oferBg" className={classes.oferBg} />
        <div className={classes.oferTitle}>
          Buy any 2 burgers and get 1.5L Pepsi Free
        </div>
      </div>
    </div>
  );
}

export default ofer;
