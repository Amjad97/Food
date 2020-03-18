import React from "react";
import Item from "./Item";
import imageOne from "../../../images/1.png";
import imageTwo from "../../../images/2.png";
import imagethree from "../../../images/3.png";
import imagefour from "../../../images/4.png";
import imageFive from "../../../images/5.png";
import imageSix from "../../../images/6.png";

const data = [
  {
    img: imageOne,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  },
  {
    img: imageTwo,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  },
  {
    img: imagethree,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  },
  {
    img: imagefour,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  },
  {
    img: imageFive,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  },
  {
    img: imageSix,
    rate: "7.5 Rating",
    title: "Attribute Variation",
    description: "Chicken, tommato, green salad, pita, ketchup,….",
    price: "$10.99"
  }
];
function GallaryData() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "5%",
        flexWrap: "wrap"
      }}
    >
      {data.map(item => (
        <Item
          key={item.img}
          img={item.img}
          rate={item.rate}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default GallaryData;
