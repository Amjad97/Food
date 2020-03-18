import React from "react";
import Ofer from "./components/ofer";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Arrow from "../../icons/Arrow";
import style from "./style/style";
import Background from "../../images/background.png";
import Burger from "../../images/Burger.png";
import Bar from "../../images/bar.png";
import scroll from "../../images/scroll.png";

const useStyle = makeStyles(style);

function Home() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <NavBar />
      <img src={Background} alt="background" className={classes.background} />
      <img src={Burger} alt="burger" className={classes.burgerImage} />
      <div style={{ position: "absolute", top: "30%", left: "10%" }}>
        <h1 className={classes.text}>Party Time!</h1>
        <Ofer />
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<Arrow />}
        >
          order now
        </Button>
      </div>
      <img src={scroll} alt="scroll" className={classes.scroll} />
      <img src={Bar} alt="bar" className={classes.bar} />
    </div>
  );
}

export default Home;
