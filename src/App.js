import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Import from "./pages/Import.js";
import Create from "./pages/Create.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="import" element={<Import/>}></Route>
          <Route path="create" element={<Create />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
