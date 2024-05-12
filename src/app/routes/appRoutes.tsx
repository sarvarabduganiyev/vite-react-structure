import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../../layouts";
import { MyOrdersPage } from "../../pages/main/my-orders/MyOrdersPage.tsx";
import { MainLayout } from "../../layouts/MainLayout.tsx";
import AboutPage from "../../pages/main/about/AboutPage.tsx";
// @ts-expect-error
import {AuthPage} from "../../pages/auth";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        index: true,
                        element: <AuthPage />,
                    },
                ],
            },
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <MyOrdersPage />,
                    },
                    {
                        path: "about",
                        element: <AboutPage />, // Use the new keyword to instantiate AboutPage
                    },
                ],
            },
        ]
    }
]);
