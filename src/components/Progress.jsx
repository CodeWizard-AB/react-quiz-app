import { useQuiz } from "../context/QuizContext";

function Progress() {
	const { index, questions, points } = useQuiz();
	return (
		<div className="progress">
			<progress value={index} min={index} max={questions.length - 1} />
			<p>
				Question <strong>{index + 1}</strong> / 15
			</p>
			<p>
				<strong>{points}</strong> / 280
			</p>
		</div>
	);
}

export default Progress;
