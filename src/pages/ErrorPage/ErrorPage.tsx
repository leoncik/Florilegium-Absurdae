import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <p>I am error.</p>
            <Link to={"/home"}>Go back.</Link>
        </div>
    );
}
