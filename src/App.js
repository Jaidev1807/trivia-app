import logo from "./logo.svg";
import "./App.css";
import Question from "./component/Question";
import "./css/styles.css";

function App() {
  return (
    <div>
      <header>
        <a href="/">Trivia App</a>
      </header>
      <div className="container">
        {" "}
        {/* Add a container div */}
        <Question />
      </div>
    </div>
  );
}

export default App;
