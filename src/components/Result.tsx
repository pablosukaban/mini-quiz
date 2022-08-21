type ResultProps = {
  correct: number;
  length: number;
};

function Result({ correct, length }: ResultProps) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Правильных ответов: {correct} из {length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;
