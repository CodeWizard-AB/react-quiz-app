import { useReducer, createContext, useContext, useEffect } from "react";

const QuizContext = createContext();
const initialState = {
	// * loading, error, active, ready, finished
	status: "loading",
	questions: [],
	index: 0,
	answer: null,
	points: 0,
	highscore: 0,
	time: null,
};

const reducer = function (state, action) {
	switch (action.type) {
		case "dataReceived":
			return { ...state, status: "ready", questions: action.payload };

		case "dataFailed": {
			return { ...state, status: "error" };
		}

		case "start":
			return { ...state, status: "active", time: 300 };

		case "newAnswer": {
			const { points, correctOption } = state.questions[state.index];
			return {
				...state,
				answer: action.payload,
				points:
					correctOption === action.payload
						? state.points + points
						: state.points,
			};
		}

		case "next":
			return { ...state, index: state.index + 1, answer: null };

		case "finish":
			return { ...state, status: "finished", answer: null };

		case "reset":
			return { ...initialState, status: "ready" };

		case "tick":
			return { ...state, time: state.time - 1 };

		default:
			throw new Error("Unknown action type");
	}
};

// eslint-disable-next-line react/prop-types
const QuizProvider = function ({ children }) {
	const [{ questions, status, answer, time, index, points }, dispatch] =
		useReducer(reducer, initialState);

	useEffect(() => {
		fetch("http://localhost:3000/questions")
			.then((res) => res.json())
			.then((ques) => dispatch({ type: "dataReceived", payload: ques }))
			.catch(() =>
				dispatch({
					type: "dataFailed",
				})
			);
	}, []);

	return (
		<QuizContext.Provider
			value={{ questions, status, index, answer, dispatch, points, time }}
		>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = function () {
	const context = useContext(QuizContext);
	if (context === undefined) throw new Error("Calling outside the provider");
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useQuiz, QuizProvider };
