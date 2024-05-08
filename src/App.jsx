import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import UpdateRemote from "./routes/bodegas/UpdateRemote";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="bodegas/actualizar-remoto"
              element={<UpdateRemote />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
