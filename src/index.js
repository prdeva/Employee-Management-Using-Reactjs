import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/login";
import Nextpage from './components/nextpage';
import './components/style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tot">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/nextpage" element={<Nextpage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));