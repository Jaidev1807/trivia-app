import React, { useState, useEffect } from "react";
import axios from "axios";

const Question = () => {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=1&type=boolean"
      );
      const { category, question, correct_answer } = response.data.results[0];
      setCategory(category);
      setQuestion(question);
      setAnswer(correct_answer);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleRevealAnswer = () => {
    setRevealed(true);
  };

  return (
    <div>
      <div>{category}</div>
      <h3>{question}</h3>
      <button type="button" onClick={handleRevealAnswer}>
        Reveal answer
      </button>
      {revealed && <div>{answer}</div>}
    </div>
  );
};

export default Question;
