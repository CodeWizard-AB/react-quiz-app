import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import Timer from "./Timer";

function Footer() {
	const { index, questions, answer } = useQuiz();
	const type = index < questions.length - 1 ? "next" : "finish";
	return (
		<div>
			<Timer />
			{answer ? (
				<Button type={type}>{type[0].toUpperCase() + type.slice(1)}</Button>
			) : null}
		</div>
	);
}

export default Footer;
