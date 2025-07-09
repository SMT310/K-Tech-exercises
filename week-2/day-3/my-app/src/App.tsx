import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import MyShop from "./components/MyShop";
import MyShop3 from "./components/MyShop3";
import MyShop4 from "./components/MyShop4";
import MyShop5 from "./components/MyShop5";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import AppRoutes from "./routes/AppRoutes";
import AppRoutes2 from "./routes/AppRoutes2";
function App() {
  return (
    // <Counter1/>
    // <Counter2/>
    // <MyShop/>
    // <MyShop3/>
    // <MyShop4 />
    // <MyShop5 />
    // <BrowserRouter>
    //   <Link to={"/"}>Home |</Link>
    //   <Link to={"/about"}>About |</Link>
    //   <Link to={"/product"}>Product |</Link>
    //   <Link to={"/product/women"}>Women Clothes |</Link>
    //   <Link to={"/product/men"}>Men Clothes</Link>
    //   <AppRoutes />
    // </BrowserRouter>
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About </Link>
        </li>
        <li>
          <Link to={"/product"}>Product </Link>
        </li>
        <li>
          <Link to={"/product/women"}>Women Clothes </Link>
        </li>
        <li>
          <Link to={"/product/men"}>Men Clothes</Link>
        </li>
      </ul>
      {/* <AppRoutes /> */}
      <AppRoutes2 />
    </BrowserRouter>
  );
}

export default App;
