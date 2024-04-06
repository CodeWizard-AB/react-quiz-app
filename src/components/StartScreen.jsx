import { useQuiz } from "../context/QuizContext";
import Button from "./Button";

function StartScreen() {
	const { questions } = useQuiz();
	return (
		<div className="start">
			<h2>Welcome to the React Quiz!</h2>
			<h3>{questions.length} questions to test your React mastery</h3>
			<Button type="start">{"Let's Start"}</Button>
		</div>
	);
}

export default StartScreen;
