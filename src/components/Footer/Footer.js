import React from "react";
import { makeStyles } from "@material-ui/styles";
import Style from "./style/style";
import logo from "../../images/logo.png";
import discover from "../../images/discover.png";
import pay from "../../images/pay.png";
import gpay from "../../images/gpay.png";
import masterCard from "../../images/masterCard.png";
import express from "../../images/express.png";
import visa from "../../images/visa.png";
import line from "../../images/line2.png";
import imageOne from "../../images/imageOne.png";
import imageTwo from "../../images/imageTwo.png";
import imageThree from "../../images/imageThree.png";
import imageFour from "../../images/imageFour.png";
import imageFive from "../../images/imageFive.png";
import imageSix from "../../images/imageSix.png";
import line2 from "../../images/Line4.png";

const useStyle = makeStyles(Style);

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.payments}>
          <img src={logo} alt="logo" />
          <div
            style={{
              lineHeight: 1.2,
              marginTop: 30,
              fontFamily: "Montserrat"
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div className={classes.paymentMethods}>
            <img src={express} alt="express" style={{ marginRight: 10 }} />
            <img src={visa} alt="visa" style={{ marginRight: 10 }} />
            <img
              src={masterCard}
              alt="masterCard"
              style={{ marginRight: 10 }}
            />
            <img src={discover} alt="discover" style={{ marginRight: 10 }} />
            <img src={gpay} alt="gpay" style={{ marginRight: 10 }} />
            <img src={pay} alt="pay" style={{ marginRight: 10 }} />
          </div>
        </div>
        <div style={{ width: "25%", marginLeft: "5%" }}>
          <div style={{ color: "#A80E0E", fontSize: 22 }}>
            USEFUL&nbsp;&nbsp;LINKS
          </div>
          <img src={line} alt="line" style={{ marginTop: "7%" }} />
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10%" }}
          >
            <div className={classes.linkContainer}>
              <span className={classes.firstLink}>About</span>
              <span className={classes.link}>Menu</span>
              <span className={classes.link}>Testimonials</span>
              <span className={classes.link}>Contact Us</span>
            </div>
            <div className={classes.linkContainer}>
              <span className={classes.firstLink}>Whishlist</span>
              <span className={classes.link}>Privacy Policy</span>
              <span className={classes.link}>Order Tracking</span>
              <span className={classes.link}>Warranty and Services</span>
            </div>
          </div>
        </div>
        <div style={{ width: "30%", marginLeft: "5%" }}>
          <div style={{ color: "#A80E0E", fontSize: 22 }}>
            INSTAGRAM&nbsp;&nbsp;FEED
          </div>
          <img src={line} alt="line" style={{ marginTop: "4%" }} />
          <div style={{ display: "flow-wrap", marginTop: "10%" }}>
            <img src={imageOne} alt="imageOne" className={classes.image} />
            <img src={imageTwo} alt="imageTwo" className={classes.image} />
            <img src={imageThree} alt="imageThree" className={classes.image} />
            <img src={imageFour} alt="imageFour" className={classes.image} />
            <img src={imageFive} alt="imageFive" className={classes.image} />
            <img src={imageSix} alt="imageSix" className={classes.image} />
          </div>
        </div>
      </div>
      <img src={line2} alt="line" className={classes.bar} />
      <div className={classes.copyRight}>
        © 2019, Hot Burgers. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
