import React from "react";
import { makeStyles } from "@material-ui/styles";
import testimonials from "../../images/testimonials.png";
import qoutes from "../../images/qoutes.png";
import line from "../../images/line.png";
import slider from "../../images/slider.png";
import Style from "./style/style";

import Brush from "../../images/Brush.png";

const useStyle = makeStyles(Style);

function Testimonials() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Client Testimonials</div>
      <img src={Brush} alt="brush" className={classes.brush} />
      <div className={classes.subTitle}>
        Try our Most Delicious food and it usually take minutes to deliver!
      </div>
      <div style={{ display: "flex", padding: "10em 5em" }}>
        <img src={testimonials} alt="testimonials" style={{ height:'30em' }} />
        <div style={{ paddingTop: "1em", paddingLeft: "5em", width: "50%" }}>
          <img src={qoutes} alt="qoutes" style={{width:40, height:'40'}}/>
          <div className={classes.qoute}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div className={classes.nameContainer}>
            <div
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                fontFamily: "Montserrat"
              }}
            >
              Nina Margaret
            </div>
            <img src={line} alt="line" style={{ paddingLeft: "1em" }} />
          </div>
          <div className={classes.description}>CEO, Abc Company</div>
          <img src={slider} alt="slider" style={{ paddingTop: "3em" }} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
