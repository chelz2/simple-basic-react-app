import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header></Header>
      <div className="container">
        <h2>
          <FeedbackList feedback={feedback}></FeedbackList>
        </h2>
      </div>
    </>
  );
}

export default App;
