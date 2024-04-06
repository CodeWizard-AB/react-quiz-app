import { useQuiz } from "../context/QuizContext";
import Footer from "./Footer";
import Progress from "./Progress";

function Question() {
	const { questions, index, dispatch, answer } = useQuiz();
	const { question, options, correctOption } = questions[index];

	return (
		<div>
			<Progress />
			<h4>{question}</h4>
			<div className="options">
				{options.map((opt, i) => (
					<button
						key={opt}
						onClick={dispatch.bind(null, { type: "newAnswer", payload: i })}
						className={`btn btn-option ${answer === i && "answer"} ${
							answer && (i === correctOption ? "correct" : "wrong")
						}`}
						disabled={Boolean(answer)}
					>
						{opt}
					</button>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default Question;
