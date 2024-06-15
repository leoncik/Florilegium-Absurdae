import { Link } from "react-router-dom";

export default function OptionsPage() {
    return (
        <div>
            <Link to="/home">Go back</Link>
            <h1>Let's tweak some stuff :D</h1>
            <h2>Select your theme:</h2>
            <div>
                <ul>
                    <li>
                        <button>Light</button>
                    </li>
                    <li>
                        <button>Dark</button>
                    </li>
                    <li>
                        <button>Retro</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
