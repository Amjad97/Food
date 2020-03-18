import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, IconButton } from "@material-ui/core";
import Style from "./style/style";
import map from "../../images/map.png";
import clock from "../../images/clock.png";
import location from "../../images/placeholder.png";
import line from "../../images/Line3.png";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";

const useStyle = makeStyles(Style);

function Contact() {
  const classes = useStyle();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "#A80E0E", width: "50%" }}>
        <div className={classes.container}>
          <Button variant="contained" className={classes.buttonItem}>
            Call Us
          </Button>
          <div className={classes.phone}>1-234-567-890</div>
          <div className={classes.time}>
            <img src={clock} alt="clock" />
            <div className={classes.apointment}>
              <div
                style={{
                  color: "white",
                  fontSize: '1.2vw',
                  fontFamily: "Montserrat"
                }}
              >
                mon-thu: 11.00 – 23.00
              </div>
              <div
                style={{
                  color: "white",
                  paddingTop: 10,
                  fontSize: '1vw',
                  fontFamily: "Montserrat"
                }}
              >
                sat: 12.00 – 23.00 | sun: 12.00 – 21.00
              </div>
            </div>
          </div>
          <img src={line} alt="line" style={{ paddingTop: 30 }} />
          <div className={classes.location}>
            <img src={location} alt="location" />
            <div className={classes.street}>
              <div
                style={{
                  color: "white",
                  fontSize: '1vw',
                  fontFamily: "Montserrat"
                }}
              >
                123 East 456th Street,
              </div>
              <div
                style={{
                  color: "white",
                  paddingTop: 10,
                  fontSize: '1vw',
                  fontFamily: "Montserrat"
                }}
              >
                New York City NY 10065
              </div>
            </div>
          </div>
          <div className={classes.accounts}>
            <IconButton className={classes.account}>
              <Facebook />
            </IconButton>
            <IconButton className={classes.account}>
              <Twitter />
            </IconButton>
            <IconButton className={classes.account}>
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
      <img src={map} alt="map" style={{ width: "50%" }} />
    </div>
  );
}

export default Contact;
