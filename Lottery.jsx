import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery() {

    const TICKET_LENGTH = 3;
    const WINNING_SUM = 15;

    // ticket state
    let [ticket, setTicket] = useState(genTicket(TICKET_LENGTH));

    // winning condition
    let isWinning = sum(ticket) === WINNING_SUM;

    // generate new ticket
    let buyTicket = () => {
        setTicket(genTicket(TICKET_LENGTH));
    };

    return (
        <div>
            <h1>Lottery Game</h1>

            {/* pass ticket array to Ticket component */}
            <Ticket ticket={ticket} />

            <button onClick={buyTicket}>Buy New Ticket</button>

            <h3>{isWinning && "🎉 Congratulations, you won!"}</h3>
        </div>
    );
}
