import classes from "./SuccessMessage.module.css";
import { motion } from "framer-motion";

const successMessageVariants = {
    animatingFrantically: {
        rotate: [0, 360],
        scale: [0.5, 1.7, 0.5],
        color: ["#d60fe3", "#0fe1e3", "#d4e516", "#ff00ef"],
        transition: {
            rotate: { repeat: Infinity, duration: 4, ease: "linear" },
            scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            color: { repeat: Infinity, duration: 6, ease: "linear" },
        },
    },
};

export default function SuccessMessage() {
    return (
        <div className={classes.wrapper}>
            <motion.p
                className={classes.message}
                variants={successMessageVariants}
                animate="animatingFrantically"
            >
                A WINNER IS YOU !
            </motion.p>
        </div>
    );
}
