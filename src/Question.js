import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setDisplayInfo(!displayInfo)}>
          {!displayInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {displayInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
