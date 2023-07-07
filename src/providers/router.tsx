import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Landing from "../pages";
import About from "../pages/about";
import Team from "../pages/team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/__experimental/">
      <Route index element={<Landing />} />
      <Route path="/__experimental/about/" element={<About />} />
      <Route path="/__experimental/team/" element={<Team />} />
    </Route>
  )
);

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
