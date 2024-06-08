import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FellLuckyPage from "./pages/FeelLuckyPage/FellLuckyPage";
import FrontispiecePage from "./pages/FrontispiecePage/FrontispiecePage";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontispiecePage />,
    },
    {
        path: "home",
        element: <HomePage />,
    },
    {
        path: "feel-lucky",
        element: <Layout PageContent={<FellLuckyPage />} />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
