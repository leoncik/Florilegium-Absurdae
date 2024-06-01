import { useState } from "react";
import classes from "./Card.module.css";
import { ICard } from "../cards";

interface CardProps {
    gameCards: ICard[];
    setGameCards: React.Dispatch<React.SetStateAction<ICard[]>>;
    nextCard: ICard | null;
    setNextCard: React.Dispatch<React.SetStateAction<ICard | null>>;
    gameCardsLength: number;
    setGameCardsLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function Card({
    gameCards,
    setGameCards,
    nextCard,
    setNextCard,
    gameCardsLength,
    setGameCardsLength,
}: CardProps) {
    const [currentCard, setCurrentCard] = useState<ICard>();
    const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

    function handleClick() {
        // All cards have been revealed.
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
        if (nextCard) {
            setCurrentCard(nextCard);
            setNextCard(null);
            setGameCardsLength(gameCardsLength - 1);

            // The card is selected for the first time.
        } else {
            setCurrentCard(gameCards[0]);
            setNextCard(gameCards[0]);
            const newGameCardsValue = gameCards.slice(1);
            setGameCards(newGameCardsValue);
            setGameCardsLength(gameCardsLength - 1);
        }
    }

    return (
        <div className={classes.card} onClick={handleClick}>
            <p>{currentCard?.value}</p>
            <img src={currentCard?.image} alt={currentCard?.value} />
        </div>
    );
}
