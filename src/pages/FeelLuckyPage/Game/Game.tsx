import { useState } from "react";
import Card from "../Card/Card";
import classes from "./Game.module.css";
import { shuffle } from "../../../helpers/utils";
import cards, { ICard } from "../cards";

export default function Game() {
    shuffle(cards);
    const displayedGameCards = Array.from({ length: cards.length * 2 });

    const [gameCardsLength, setGameCardsLength] = useState(
        displayedGameCards.length
    );
    const [gameCards, setGameCards] = useState(cards);
    const [nextCard, setNextCard] = useState<ICard | null>(null);

    return (
        <>
            <div>{gameCardsLength === 0 && "SUCCESS"}</div>
            <div className={classes.board}>
                {displayedGameCards.map((_, index) => (
                    <Card
                        key={index}
                        gameCards={gameCards}
                        setGameCards={setGameCards}
                        nextCard={nextCard}
                        setNextCard={setNextCard}
                        gameCardsLength={gameCardsLength}
                        setGameCardsLength={setGameCardsLength}
                    />
                ))}
            </div>
        </>
    );
}
