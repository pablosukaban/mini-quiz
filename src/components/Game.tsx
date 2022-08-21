import { QuestionType } from "../App";

type GameProps = {
  question: QuestionType;
  onClickVariant: (index: number) => void;
  step: number;
  percent: number;
};

function Game({ step, percent, question, onClickVariant }: GameProps) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((q, index) => (
          <li key={q} onClick={() => onClickVariant(index)}>
            {q}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
