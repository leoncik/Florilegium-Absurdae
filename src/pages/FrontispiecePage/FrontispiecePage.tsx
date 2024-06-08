import { Link } from "react-router-dom";
import classes from "./FrontispiecePage.module.css";

export default function FrontispiecePage() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h1>Florilegium Absurdae</h1>
                <Link to="/home">Enter</Link>
            </div>
        </div>
    );
}
