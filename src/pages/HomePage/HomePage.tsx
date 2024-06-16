import classes from "./HomePage.module.css";
import HomeCard, { HomeCardProps } from "./HomeCard/HomeCard";
import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";
import settings from "../../assets/home/settings.svg";
import { motion } from "framer-motion";
import { useAutocompleteT } from "../../hooks/useAutocompleteT";
import back from "../../assets/feel-lucky/card-back.png";
import todo from "../../assets/home/todo.jpg";

export default function HomePage() {
    const currentTheme = useOptionsStore((state) => state.theme);
    const { T } = useAutocompleteT();

    const pages: HomeCardProps[] = [
        {
            url: "/feel-lucky",
            image: back,
            text: T("pages.feelLucky"),
        },
        {
            url: "/todo-the-game",
            image: todo,
            text: T("pages.todoGame"),
        },
    ];

    return (
        <div className={classes.home}>
            <div>
                <h1>Florilegium Absurdae</h1>
                <p>
                    {T("home.currentTheme")} {currentTheme}
                </p>
                <div className={classes["pages-wrapper"]}>
                    {pages.map((page) => (
                        <HomeCard
                            key={page.text}
                            url={page.url}
                            image={page.image}
                            text={page.text}
                        />
                    ))}
                </div>
                <Link to={"/options"} className={classes.options}>
                    <div>
                        <motion.img
                            animate={{ rotate: 180 }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                            }}
                            src={settings}
                            alt="Options"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
