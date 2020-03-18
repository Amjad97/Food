import React from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/styles";
import style from "../style/style";

import itemOne from "../../../images/item1.png";
import itemTwo from "../../../images/item2.png";
import itemThree from "../../../images/item3.png";
import itemFour from "../../../images/item4.png";

const useStyle = makeStyles(style);

function Collection() {
  const classes = useStyle();

  return (
    <div className={classes.collection}>
      <Item
        img={itemOne}
        title="Free shipping on first order"
        desc="Sign up for updates and get free shipping"
      />
      <Item
        img={itemTwo}
        title="30 minutes delivery"
        desc="Everything you order will be quickly delivered to your door."
      />
      <Item
        img={itemThree}
        title="Best quality guarantee"
        desc="We use only the best ingredients to cook the tasty fresh food for you."
      />
      <Item
        img={itemFour}
        title="Variety of dishes"
        desc="In our menu you’ll find a wide variety of dishes, desserts, and drinks."
      />
    </div>
  );
}

export default Collection;
