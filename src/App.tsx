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
import { Talkr } from "talkr";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

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
    const currentLanguage = useOptionsStore((state) => state.language);

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
    return (
        <Talkr
            languages={{ en, fr }}
            defaultLanguage={currentLanguage}
            detectBrowserLanguage={currentLanguage ? false : true}
        >
            <RouterProvider router={router} />
        </Talkr>
    );
}

export default App;
