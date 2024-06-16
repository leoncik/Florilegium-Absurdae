import { Link } from "react-router-dom";
import useOptionsStore from "../../stores/optionsStore";
import { useT } from "talkr";
import { useAutocompleteT } from "../../hooks/useAutocompleteT";
import classes from "./Options.module.css";

export default function OptionsPage() {
    const currentTheme = useOptionsStore((state) => state.theme);
    const currentLanguage = useOptionsStore((state) => state.language);
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
                <ul className={classes.themes}>
                    <li>
                        <button
                            onClick={() => setTheme("light")}
                            className={
                                currentTheme === "light" ? classes.active : ""
                            }
                        >
                            {T("options.light")}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTheme("dark")}
                            className={
                                currentTheme === "dark" ? classes.active : ""
                            }
                        >
                            {T("options.dark")}{" "}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTheme("retro")}
                            className={
                                currentTheme === "retro" ? classes.active : ""
                            }
                        >
                            {T("options.retro")}{" "}
                        </button>
                    </li>
                </ul>
            </div>

            <h2>{T("options.languageSelect")}</h2>
            <ul className={classes.languages}>
                <li>
                    <button
                        className={
                            currentLanguage === "fr" ? classes.active : ""
                        }
                        onClick={() => handleSetLanguage("fr")}
                    >
                        FR
                    </button>
                </li>
                <li>
                    <button
                        className={
                            currentLanguage === "en" ? classes.active : ""
                        }
                        onClick={() => handleSetLanguage("en")}
                    >
                        EN
                    </button>
                </li>
            </ul>
        </div>
    );
}
