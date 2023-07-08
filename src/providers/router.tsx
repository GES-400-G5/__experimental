import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider,
} from "react-router-dom";
import Landing from "../pages";
import About from "../pages/about";
import Team from "../pages/team";
import AppPage from "../pages/app";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route index element={<Landing />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/team" element={<Team />} />
//     </Route>
//   ),
//   { basename: "/__experimental/" }
// );

export const RouteProvider = () => {
  return (
    <BrowserRouter basename={"/__experimental/"}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
};
