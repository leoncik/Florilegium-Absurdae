import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";

export default function OptionsPage() {
    const setTheme = useOptionsStore((state) => state.setTheme);

    return (
        <div>
            <Link to="/home">Go back</Link>
            <h1>Let's tweak some stuff :D</h1>
            <h2>Select your theme:</h2>
            <div>
                <ul>
                    <li>
                        <button onClick={() => setTheme("light")}>Light</button>
                    </li>
                    <li>
                        <button onClick={() => setTheme("dark")}>Dark</button>
                    </li>
                    <li>
                        <button onClick={() => setTheme("retro")}>Retro</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
