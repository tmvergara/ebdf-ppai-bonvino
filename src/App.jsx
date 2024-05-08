import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Add from "./routes/add/Add";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
