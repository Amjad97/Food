import React, { useState, useContext } from "react";
import Item from "./Item";
import { RefsContext } from "../../../App";

function List() {
  const [selected, setSelected] = useState("Home");
  const { menuRef, gallaryRef, testimonialsRef, contactRef } = useContext(
    RefsContext
  );
  console.log(RefsContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <Item title="Home" selected={selected} setSelected={setSelected} />
      <Item
        title="Menu"
        selected={selected}
        setSelected={setSelected}
        itemRef={menuRef}
      />
      <Item
        title="Gallary"
        selected={selected}
        setSelected={setSelected}
        itemRef={gallaryRef}
      />
      <Item
        title="Testimonial"
        selected={selected}
        setSelected={setSelected}
        itemRef={testimonialsRef}
      />
      <Item
        title="Contact"
        selected={selected}
        setSelected={setSelected}
        itemRef={contactRef}
      />
    </div>
  );
}

export default List;
