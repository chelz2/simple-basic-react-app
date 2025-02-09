import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Aboutpage from "./Pages/Aboutpage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                  <FeedbackStats feedback={feedback}></FeedbackStats>
                  <h2>
                    <FeedbackList
                      feedback={feedback}
                      handleDelete={deleteFeedback}
                    ></FeedbackList>
                  </h2>
                </>
              }
            ></Route>
            <Route path="/about" element={<Aboutpage />}></Route>
          </Routes>
        </div>
        <AboutIconLink></AboutIconLink>
      </>
    </Router>
  );
}

export default App;
