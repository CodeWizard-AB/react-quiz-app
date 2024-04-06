import { useQuiz } from "../context/QuizContext";

function Progress() {
	const { index, questions, points, totalScore } = useQuiz();
	return (
		<div className="progress">
			<progress value={index} min={index} max={questions.length - 1} />
			<p>
				Question <strong>{index + 1}</strong> / 15
			</p>
			<p>
				<strong>{points}</strong> / {totalScore}
			</p>
		</div>
	);
}

export default Progress;
