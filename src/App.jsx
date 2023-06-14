import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movie } from "./pages/Movie";
import { LandingPage } from "./pages/LandingPage";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFound /> },
  { path: "/movie/:movieID", element: <Movie /> },
]);

export function Aplication() {
  return <RouterProvider router={router} />;
}
