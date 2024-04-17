// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homePage";
import About from "./pages/aboutPage";
import SignUp from "./pages/signUpPage";
import ViewGallery from "./pages/galleryPage";
import InfoPage from "./components/infoPage";
import LogIN from "./components/loginPage";
import LogOut from "./components/logoutPage";

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
      {
        path: "/info",
        element: <InfoPage/>,
      },
      {
        path: "/login",
        element: <LogIN/>,
      },
      {
        path: "/logout",
        element: <LogOut/>,
      },
    ],
  },
]);

export default router;