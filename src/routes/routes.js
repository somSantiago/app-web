// Routes
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

const routes = [
  {
    "path": "/",
    "element" : <Home/>
  },{
    "path": "/about",
    "element" : <About/>
  },{
    "path": "/login",
    "element" : <Login/>
  },{
    "path": "/dashboard",
    "element" : <Dashboard/>
  }
];

export default routes;