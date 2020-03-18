import React from "react";
import { string, number } from "prop-types";

const Person = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.083"
    height="34.205"
    viewBox="0 0 31.083 34.205"
  >
    <g id="Group_1302" data-name="Group 1302" transform="translate(0.75 0.75)">
      <circle
        id="Ellipse_94"
        data-name="Ellipse 94"
        cx="6.133"
        cy="6.133"
        r="6.133"
        transform="translate(8.659)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        id="Path_3416"
        data-name="Path 3416"
        d="M711.976,245.5a14.791,14.791,0,0,0-29.583,0Z"
        transform="translate(-682.393 -212.794)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export default Person;

Person.propTypes = {
  color: string,
  width: number,
  height: number
};

Person.defaultProps = {
  color: "#fff",
  width: 20,
  height: 20
};
