import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions.map((e) => {
          return <SingleQuestion key={e.id} {...e} />;
        })}
      </section>
    </div>
  );
}

export default App;
