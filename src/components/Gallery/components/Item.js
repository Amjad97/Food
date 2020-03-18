import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import gallaryBar from "../../../images/gallaryBar.png";
import Style from "../style/style";
import Star from "../../../icons/Star";
import Cart from "../../../icons/Cart";

const useStyle = makeStyles(Style);

function Item({ img, rate, title, description, price }) {
  const classes = useStyle();

  return (
    <div className={classes.item}>
      <div style={{ position: "relative" }}>
        <img src={img} alt={title} className={classes.itemImage} />
        <img src={gallaryBar} alt="bar" className={classes.itemBar} />
      </div>
      <div className={classes.textContainer}>
        <div style={{ display: "flex" }}>
          <Star />
          <div style={{ marginLeft: "0.5em" }}>{rate}</div>
        </div>
        <div className={classes.itemTitle}>{title}</div>
        <div className={classes.itemDescription}>{description}</div>
        <div
          style={{ display: "flex", paddingTop: "1.5em", alignItems: "center" }}
        >
          <Button
            variant="contained"
            className={classes.buttonItem}
            startIcon={<Cart />}
          >
            Add To Cart
          </Button>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
