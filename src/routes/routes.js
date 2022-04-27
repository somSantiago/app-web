// Routes
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";

const routes = [
  {
    "path": "/",
    "element" : <Home/>
  },{
    "path": "/about",
    "element" : <About/>
  },,{
    "path": "/login",
    "element" : <Login/>
  },
];

export default routes;