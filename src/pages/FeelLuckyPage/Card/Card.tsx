import { useState } from "react";
import classes from "./Card.module.css";

interface CardProps {
    gameCardsValue: string[];
    setGameCardsValue: React.Dispatch<React.SetStateAction<string[]>>;
    nextCardValue: string;
    setNextCardValue: React.Dispatch<React.SetStateAction<string>>;
    gameCardsLength: number;
    setGameCardsLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function Card({
    gameCardsValue,
    setGameCardsValue,
    nextCardValue,
    setNextCardValue,
    gameCardsLength,
    setGameCardsLength,
}: CardProps) {
    const [cardValue, setCardValue] = useState<string>();
    const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

    function handleClick() {
        if (gameCardsLength === 0) {
            console.log("Game over.");
            return;
        }
        // TODO: Add a shaky effect if the user tries to reveal a card that has been already revealed.
        if (hasBeenRevealed) {
            console.log("Already revealed");
            return;
        }
        setHasBeenRevealed(true);

        // A card has already been selected.
        if (nextCardValue) {
            setCardValue(nextCardValue);
            setNextCardValue("");
            setGameCardsLength(gameCardsLength - 1);

            // The card is selected for the first time.
        } else {
            setCardValue(gameCardsValue[0]);
            setNextCardValue(gameCardsValue[0]);
            const newGameCardsValue = gameCardsValue.slice(1);
            setGameCardsValue(newGameCardsValue);
            setGameCardsLength(gameCardsLength - 1);
        }
    }

    return (
        <div className={classes.card} onClick={handleClick}>
            <p>{cardValue}</p>
        </div>
    );
}
