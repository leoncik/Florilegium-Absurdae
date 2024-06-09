import classes from "./HomePage.module.css";
import { pages } from "./pages";
import HomeCard from "./HomeCard/HomeCard";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className={classes.home}>
            <div>
                <h1>Florilegium Absurdae</h1>
                <div className={classes["pages-wrapper"]}>
                    {pages.map((page) => (
                        <HomeCard
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
