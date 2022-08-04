import { useState } from "react";
import './Main.css'

const Main = () => {
  const questions = [
    {
      questionText: "What is the capital of India",
      answerOptions: [
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Nagpur", isCorrect: false },
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Banglore", isCorrect: false },
      ],
    },
    {
      questionText: "Who is this tech entrepreneur and CEO of the electric vehicle company, Tesla ?",
      answerOptions: [
        { answerText: "Tony Stark", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
      ],
    },
    {
      questionText: "Iphone is manufactured by ",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Tesla", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Samsung", isCorrect: false },
      ],
    },
    {
      questionText: "Independence Day is celebrated in India ?",
      answerOptions: [
        { answerText: "15 August", isCorrect: true },
        { answerText: "25 January", isCorrect: false },
        { answerText: "9 March", isCorrect: false },
        { answerText: "15 July", isCorrect: false },
      ],
    },
    {
      questionText: " What is the shape of the cells in a honeycomb made by bees ?",
      answerOptions: [
        { answerText: "Octagon", isCorrect: false },
        { answerText: "Hexagon", isCorrect: true },
        { answerText: "Square", isCorrect: false },
        { answerText: "Oval", isCorrect: false },
      ],
    },
    {
      questionText: " Which part of the plant absorbs water and nutrients from the soil ?",
      answerOptions: [
        { answerText: "Stem", isCorrect: false },
        { answerText: "Buds", isCorrect: false },
        { answerText: "Root", isCorrect: true },
        { answerText: "Leafs", isCorrect: false },
      ],
    },
    {
      questionText: "  Which process enables earthen pots (matkas) to keep water cool ?",
      answerOptions: [
        { answerText: "Absorption", isCorrect: false },
        { answerText: "Evaporation", isCorrect: true },
        { answerText: "Suction", isCorrect: false },
        { answerText: "Adiabatic Process", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score,setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
        setScore((score)=>score+1)
     
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      {showScore ? (
        <div className="score-section">
          You score {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question : {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
