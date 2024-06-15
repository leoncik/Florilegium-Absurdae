import classes from "./HomePage.module.css";
import { pages } from "./pages";
import HomeCard from "./HomeCard/HomeCard";
import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";

export default function HomePage() {
    const currentTheme = useOptionsStore((state) => state.theme);
    return (
        <div className={classes.home}>
            <div>
                <h1>Florilegium Absurdae</h1>
                <p>Current theme: {currentTheme}</p>
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
                    Options
                </Link>
            </div>
        </div>
    );
}
