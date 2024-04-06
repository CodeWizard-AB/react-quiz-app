import { useQuiz } from "../context/QuizContext";

// eslint-disable-next-line react/prop-types
function Button({ children, type }) {
	const { dispatch } = useQuiz();
	return (
		<button
			type="button"
			onClick={dispatch.bind(null, { type: type })}
			className={`btn btn-ui`}
		>
			{children}
		</button>
	);
}

export default Button;
