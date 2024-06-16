import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";
import { useT } from "talkr";
import { useAutocompleteT } from "../../hooks/useAutocompleteT";

export default function OptionsPage() {
    const setTheme = useOptionsStore((state) => state.setTheme);
    const setLanguage = useOptionsStore((state) => state.setLanguage);
    const { T } = useAutocompleteT();
    const { setLocale } = useT();

    function handleSetLanguage(language: "en" | "fr") {
        setLanguage(language);
        setLocale(language);
    }

    return (
        <div>
            <Link to="/home">{T("general.goBack")}</Link>
            <h1>{T("options.title")}</h1>
            <h2>{T("options.themeSelect")}</h2>
            <div>
                <ul>
                    <li>
                        <button onClick={() => setTheme("light")}>
                            {T("options.light")}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setTheme("dark")}>
                            {T("options.dark")}{" "}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setTheme("retro")}>
                            {T("options.retro")}{" "}
                        </button>
                    </li>
                </ul>
            </div>

            <h2>{T("options.languageSelect")}</h2>
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
