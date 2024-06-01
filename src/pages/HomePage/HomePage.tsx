import { Link } from "react-router-dom";

export default function HomePage() {
    return (
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
    );
}
