import { Link } from "react-router-dom";
import classes from "./HomeCard.module.css";
import { motion } from "framer-motion";

export interface HomeCardProps {
    url: string;
    image: string;
    text: string;
}

export default function HomeCard({ url, image, text }: HomeCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Link to={url}>
                <div
                    className={classes.wrapper}
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                <p className={classes.text}>{text}</p>
            </Link>
        </motion.div>
    );
}
