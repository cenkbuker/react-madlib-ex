import React from "react";
import Text from "./Text";
import uuid from "react-uuid";
import "./Madlib.css";

function Madlib({ madlibData }) {
  //better to have the madlib form and the madlib in parent component
  return (
    <div>
      <Text
        key={uuid()}
        noun={madlibData.noun}
        noun2={madlibData.noun2}
        adjective={madlibData.adjective}
        color={madlibData.color}
      />
    </div>
  );
}

export default Madlib;
