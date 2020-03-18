import React from "react";
import { makeStyles } from "@material-ui/styles";
import Collection from "./components/Collection";
import Bar from "../../images/featureBar.png";
import style from "./style/style";

const useStyle = makeStyles(style);

function Features() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <img src={Bar} alt="bar" className={classes.bar} />
      <Collection />
    </div>
  );
}

export default Features;
