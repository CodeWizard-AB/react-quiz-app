import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
	const { time, dispatch } = useQuiz();
	let min = String(Math.floor(time / 60)).padStart(2, 0);
	let sec = String(time % 60).padStart(2, 0);

	if (time === 0) dispatch({ type: "finish" });

	useEffect(() => {
		const interval = setInterval(() => dispatch({ type: "tick" }), 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<time className="timer">
			{min} : {sec}
		</time>
	);
}

export default Timer;
