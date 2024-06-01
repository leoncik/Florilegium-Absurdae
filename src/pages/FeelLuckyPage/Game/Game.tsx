import { useState } from "react";
import Card from "../Card/Card";
import classes from "./Game.module.css";
import { shuffle } from "../../../helpers/utils";

export default function Game() {
    const cardValues = ["Alkan", "Chopin", "Bach"];
    shuffle(cardValues);
    const displayedGameCards = Array.from({ length: cardValues.length * 2 });

    const [gameCardsLength, setGameCardsLength] = useState(
        displayedGameCards.length
    );
    const [gameCardsValues, setGameCardsValues] = useState(cardValues);
    const [nextCardValue, setNextCardValue] = useState("");

    return (
        <>
            <div>{gameCardsLength === 0 && "SUCCESS"}</div>
            <div className={classes.board}>
                {displayedGameCards.map((_, index) => (
                    <Card
                        key={index}
                        gameCardsValue={gameCardsValues}
                        setGameCardsValue={setGameCardsValues}
                        nextCardValue={nextCardValue}
                        setNextCardValue={setNextCardValue}
                        gameCardsLength={gameCardsLength}
                        setGameCardsLength={setGameCardsLength}
                    />
                ))}
            </div>
        </>
    );
}
