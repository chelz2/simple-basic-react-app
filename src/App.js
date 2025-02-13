import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Aboutpage from "./Pages/Aboutpage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
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
                    <FeedbackForm></FeedbackForm>
                    <FeedbackStats></FeedbackStats>
                    <h2>
                      <FeedbackList></FeedbackList>
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
    </FeedbackProvider>
  );
}

export default App;
