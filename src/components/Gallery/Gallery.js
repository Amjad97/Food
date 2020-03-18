import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Style from "./style/style";
import Brush from "../../images/Brush.png";
import GallaryData from "./components/GallaryData";

const useStyle = makeStyles(Style);

function Gallery() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Our Most Popular Recipes</div>
      <img src={Brush} alt="brush" className={classes.brush} />
      <div className={classes.subTitle}>
        Try our Most Delicious food and it usually take minutes to deliver!
      </div>
      <GallaryData />
      <Button
        variant="contained"
        className={classes.button}
      >
        Show Our Menu
      </Button>
    </div>
  );
}

export default Gallery;
