import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1>
          <FeedbackItem></FeedbackItem>
        </h1>
      </div>
    </>
  );
}

export default App;
