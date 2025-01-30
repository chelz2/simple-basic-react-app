import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackForm></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <h2>
          <FeedbackList
            feedback={feedback}
            handleDelete={deleteFeedback}
          ></FeedbackList>
        </h2>
      </div>
    </>
  );
}

export default App;
