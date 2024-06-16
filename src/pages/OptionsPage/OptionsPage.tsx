import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";
import { useT } from "talkr";

export default function OptionsPage() {
    const setTheme = useOptionsStore((state) => state.setTheme);
    const setLanguage = useOptionsStore((state) => state.setLanguage);
    const { setLocale } = useT();

    function handleSetLanguage(language: "en" | "fr") {
        setLanguage(language);
        setLocale(language);
    }

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

            <h2>Select your language</h2>
            <ul>
                <li>
                    <button onClick={() => handleSetLanguage("fr")}>FR</button>
                </li>
                <li>
                    <button onClick={() => handleSetLanguage("en")}>EN</button>
                </li>
            </ul>
        </div>
    );
}
