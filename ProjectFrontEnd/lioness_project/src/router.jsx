// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homePage";
import About from "./pages/aboutPage";
import SignUp from "./pages/signUpPage";
import ViewGallery from "./pages/galleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/gallery",
        element: <ViewGallery/>,
      },
      {
        path: "/sign-up",
        element: <SignUp/>,
      },

    ],
  },
]);

export default router;