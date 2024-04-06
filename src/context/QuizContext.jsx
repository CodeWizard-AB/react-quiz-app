import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const QuizContext = createContext();
const initialState = {
	questions: [],
	index: 0,
	answer: null,
	loading: false,
};

const reducer = function (state, action) {
	switch (action.type) {
		case "loading":
			return { ...state, loading: true };
	}
};

// eslint-disable-next-line react/prop-types
const QuizProvider = function ({ children }) {
	const [{ questions }, dispatch] = useReducer(reducer, initialState);
	return (
		<QuizContext.Provider value={(questions, dispatch)}>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = function () {
	const context = useContext(QuizContext);
	if (!context) throw new Error("Calling outside the provider");
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useQuiz, QuizProvider };
