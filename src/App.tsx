import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FellLuckyPage from "./pages/FeelLuckyPage/FellLuckyPage";
import FrontispiecePage from "./pages/FrontispiecePage/FrontispiecePage";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import { useEffect } from "react";
import useOptionsStore from "./stores/optionsStore";
import TodoGamePage from "./pages/TodoGamePage/TodoGamePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontispiecePage />,
    },
    {
        path: "home",
        element: <Layout PageContent={<HomePage />} />,
    },
    {
        path: "feel-lucky",
        element: <Layout PageContent={<FellLuckyPage />} />,
    },
    {
        path: "todo-the-game",
        element: <Layout PageContent={<TodoGamePage />} />,
    },
    {
        path: "options",
        element: <Layout PageContent={<OptionsPage />} />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

function App() {
    const currentTheme = useOptionsStore((state) => state.theme);

    // Apply on html tag a data-theme attribute on theme change
    useEffect(() => {
        const htmlTag = window.document.documentElement;
        const currentlyAppliedTheme = htmlTag.getAttribute("data-theme");
        // Set light theme by default
        if (!currentlyAppliedTheme) {
            htmlTag.setAttribute("data-theme", "light");
        }
        if (currentlyAppliedTheme !== currentTheme) {
            htmlTag.setAttribute("data-theme", currentTheme);
        }
    }, [currentTheme]);
    return <RouterProvider router={router} />;
}

export default App;
