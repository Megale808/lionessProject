import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import SignUp from './pages/SignupPage.jsx';
import Logout from './pages/logoutPage.jsx';




const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children:[
                {
                    path: true,
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
                {
                    path: '/logout',
                    element: <Logout/>
                },
                {
                    path: '/info',
                    element: <Info/>
                },
                {
                    path: '/Gallery',
                    element: <Gallery />
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ],

            errorElement: <NotFound />
        }
    ]
);

export default router;