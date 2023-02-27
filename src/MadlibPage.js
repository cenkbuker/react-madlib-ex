import React, { useEffect, useState } from "react";
import MadlibForm from "./MadlibForm";
import Madlib from "./Madlib";

function MadlibPage() {
  const [allMadlibData, setAllMadlibData] = useState([]);
  const setTextFromMadlibForm = (noun, noun2, adjective, color, submitted) => {
    setAllMadlibData((madlibData) => [
      ...madlibData,
      {
        noun,
        noun2,
        adjective,
        color,
        submitted,
      },
    ]);
  };

  return (
    <div>
      <h3 className="center">Madlibs!</h3>

      {allMadlibData.map((madlibData) => (
        <Madlib madlibData={madlibData} />
      ))}

      <MadlibForm
        className="center"
        setTextFromMadlibForm={setTextFromMadlibForm}
      />
    </div>
  );
}

export default MadlibPage;
