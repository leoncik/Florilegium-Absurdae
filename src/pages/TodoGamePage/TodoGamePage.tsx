import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";
import classes from "./TodoGamePage.module.css";

export default function TodoGamePage() {
    const currentTheme = useOptionsStore((state) => state.theme);

    return (
        <div data-theme={currentTheme} className={classes.wrapper}>
            <Link to="/home">Go back</Link>
            <h1>Un jeu incroyable, pour sûr !</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                soluta voluptate repudiandae a ipsum maiores.
            </p>
        </div>
    );
}
