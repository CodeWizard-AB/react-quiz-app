import { useQuiz } from "../context/QuizContext";
import Button from "./Button";

function FinishScreen() {
	const { totalScore, points, highscore } = useQuiz();
	const percentage = Math.round((points / totalScore) * 100);

	return (
		<div>
			<p className="result">
				😉 You scored {points} out of {totalScore} ({percentage}%)
			</p>
			<p className="highscore">HighScore: {highscore} points</p>
			<Button type="reset">Reset Quiz</Button>
		</div>
	);
}

export default FinishScreen;
