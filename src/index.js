import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import Good from "./routes/Good";
import Home from "./routes/Home";
import Tkani from "./routes/Tkani";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/tkani" element={<Tkani />} />
      <Route path="/good" element={<Good />} />
    </Routes>
  </BrowserRouter>
);
