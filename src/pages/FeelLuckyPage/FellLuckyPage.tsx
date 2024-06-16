import { Link } from "react-router-dom";
import Game from "./Game/Game";
import { useAutocompleteT } from "../../hooks/useAutocompleteT";

export default function FellLuckyPage() {
    const { T } = useAutocompleteT();

    return (
        <div>
            <h1>{T("feelLucky.title")}</h1>
            <Link to="/home">{T("general.goBack")}</Link>
            <p>{T("feelLucky.instructions")}</p>
            <Game />
        </div>
    );
}
