import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import UpdateRemote from "./routes/bodegas/UpdateRemote";
import UpdateSummary from "./routes/bodegas/UpdateSummary";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
      />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="bodegas/actualizar-remoto"
              element={<UpdateRemote />}
            />
            <Route
              path="bodegas/actualizar-remoto-summary"
              element={<UpdateSummary />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
