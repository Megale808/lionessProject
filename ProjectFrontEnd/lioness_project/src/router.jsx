// router.jsx
import { createBrowserRouter } from "react-router-dom";
import { userChecks } from "./utilities";
import App from "./App";
import HomePage from "./pages/homePage";
import About from "./pages/aboutPage";
import SignUp from "./pages/signUpPage";
import ViewGallery from "./pages/galleryPage";
import ProfilePage from "./pages/ProfilePage"
import LogIN from "./pages/loginPage";
import LogOut from "./components/logoutPage";
import ChatBot from "./components/chatbot";
import UserUpdate from "./components/userUpate";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userChecks,
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
        path: "/profile",
        element: <ProfilePage/>,
      },
      {
        path: "/login",
        element: <LogIN/>,
      },
      {
        path: "/logout",
        element: <LogOut/>,
      },
      {
        path: "/chatbot",
        element: <ChatBot/>,
      },
      {
        path: "/user-update",
        element: <UserUpdate/>,
      },
      {
        path:"*",
        element: <h1>404 Not Found</h1>
      },
    ],
  },
]);

export default router;