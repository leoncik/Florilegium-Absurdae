import { Link } from "react-router-dom";
import Game from "./Game/Game";

export default function FellLuckyPage() {
    return (
        <div>
            <h1>Feel lucky</h1>
            <Link to="/home">Go back</Link>
            <Game />
        </div>
    );
}
