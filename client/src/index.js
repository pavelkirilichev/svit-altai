import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Cart from "./routes/Cart";
import Good from "./routes/Good";
import Home from "./routes/Home";
import LK from "./routes/LK";
import MakeOrder from "./routes/MakeOrder";
import Test from "./routes/Test";
import Test2 from "./routes/Test2";
import Tkani from "./routes/Tkani";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/tkani" element={<Tkani />} />
      <Route path="/good" element={<Good />} />
      <Route path="/lk" element={<LK />} />
      <Route path="/mo" element={<MakeOrder />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  </BrowserRouter>
);
