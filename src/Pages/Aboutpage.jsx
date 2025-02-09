import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <Card>
      <div className="about">
        <h1>this a feedback app for services</h1>
        <Link to="/">return to homepage </Link>
      </div>
    </Card>
  );
}

export default Aboutpage;
