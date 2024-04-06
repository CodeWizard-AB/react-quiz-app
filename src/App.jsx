import { useQuiz } from "./context/QuizContext";

import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import Loader from "./components/Loader";
import FinishScreen from "./components/FinishScreen";
import Question from "./components/Question";

function App() {
	const { status } = useQuiz();
	let content;

	switch (status) {
		case "loading":
			content = <Loader />;
			break;
		case "error":
			content = <Error />;
			break;
		case "ready":
			content = <StartScreen />;
			break;
		case "active":
			content = <Question />;
			break;
		case "finised":
			content = <FinishScreen />;
			break;
		default:
			content;
	}

	return (
		<div className="app">
			<Header />
			<main className="main">{content}</main>
		</div>
	);
}

export default App;
