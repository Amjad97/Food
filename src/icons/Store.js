import React from "react";
import { string, number } from "prop-types";

const Store = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.614"
    height="33.568"
    viewBox="0 0 24.614 33.568"
  >
    <g id="Group_1301" data-name="Group 1301" transform="translate(0.75 0.75)">
      <rect
        id="Rectangle_254"
        data-name="Rectangle 254"
        width="23.114"
        height="24.971"
        transform="translate(0 7.097)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        id="Path_3415"
        data-name="Path 3415"
        d="M727.5,233.924v-6.993a4.962,4.962,0,1,0-9.925,0v6.993"
        transform="translate(-710.981 -221.969)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export default Store;

Store.propTypes = {
  color: string,
  width: number,
  height: number
};

Store.defaultProps = {
  color: "#fff",
  width: 20,
  height: 20
};
