import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={classes.home}>
            <div>
                <h1>Florilegium Absurdae</h1>
                <div>
                    <ul>
                        <li>
                            <Link to="/feel-lucky">Feel lucky</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
