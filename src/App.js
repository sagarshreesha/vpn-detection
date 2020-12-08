import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function App() {
  React.useEffect(() => {
    fetch(
      "https://geolocation-db.com/json/1a811210-241d-11eb-b7a9-293dae7a95e1"
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));

    console.log(details);
  }, []);
  const [details, setDetails] = React.useState(null);

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/flag" render={() => <Details details={details} />} />
    </Router>
  );
}

export default App;
