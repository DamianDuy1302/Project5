import PrivateRoute from "../components/PrivateRoute";
import Layout1 from "../layouts/Layout1";
import Answers from "../pages/Answers";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Quiz from "../pages/Quiz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topics from "../pages/Topics";

const Route1 = [
    {
        path: "/",
        element: <Layout1/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                element: <PrivateRoute/>,
                children: [
                    {
                        path: "home2",
                        element: <Home2/>
                    },
                    {
                        path: "topics",
                        element: <Topics/>
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz/>,
                    },
                    
                    {
                        path: "result/:id",
                        element: <Result/>
                    },
                    {
                        path: "answers",
                        element: <Answers/>
                    },
                    {
                        path: "logout",
                        element: <Logout/>
                    }

                ]

            }

        ]
    }
]
export default Route1