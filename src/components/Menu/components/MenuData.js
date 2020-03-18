import React from "react";
import Item from "./Item";
import burger from "../../../images/burgerItem.png";
import fries from "../../../images/friesItem.png";
import ice from "../../../images/iceItem.png";
import pizza from "../../../images/PizzaItem.png";
import sandwich from "../../../images/sandwichItem.png";
import spaghetti from "../../../images/spaghettiItem.png";

const Data = [
  { title: "Burger", img: burger },
  { title: "Pizza", img: pizza },
  { title: "Fast Food", img: fries },
  { title: "Cupcake", img: ice },
  { title: "Sandwich", img: sandwich },
  { title: "spaghetti", img: spaghetti }
];

function MenuData() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "5%",
        height: "22em"
      }}
    >
      {Data.map(item => (
        <Item title={item.title} img={item.img} key={item.title} />
      ))}
    </div>
  );
}

export default MenuData;
