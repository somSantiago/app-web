import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

const mapRouter = routes.map( route =>
  <Route key={route.path} path={route.path} element={route.element} /> 
  );
  
function Router() {
  return (
      <BrowserRouter>
        <Routes>
          {mapRouter}
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
