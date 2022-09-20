import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddBook from "./components/pages/AddBook";
import Books from "./components/pages/Books";
import UpdateBook from "./components/pages/UpdateBook";
import "./style.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
