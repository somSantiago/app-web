import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import NotFound from "../views/NotFound";

const mapRouter = routes.map( route =>
  <Route key={route.path} exact path={route.path} element={route.element} /> 
  );
  
function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route  key="notfound" path="*" element={<NotFound/>} />
          {mapRouter}
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
