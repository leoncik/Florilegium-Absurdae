import { Link } from "react-router-dom";
import Game from "./Game/Game";

export default function FellLuckyPage() {
    return (
        <div>
            <h1>I feel lucky</h1>
            <Link to="/home">Go back</Link>
            <p>Find pairs in as few clicks as possible</p>
            <Game />
        </div>
    );
}
