import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import "./index.css";

export type QuestionType = {
  title: string;
  variants: string[];
  correct: number;
};

const questions: QuestionType[] = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const percent = Math.floor((step / questions.length) * 100);
  const question = questions[step];

  const onClickVariant = (index: number) => {
    setStep((prev) => prev + 1);

    if (index === question.correct) {
      setCorrect((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          question={question}
          percent={percent}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Result correct={correct} length={questions.length} />
      )}
    </div>
  );
}

export default App;
