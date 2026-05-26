import { useState } from "react";
import { generateTicket,sumArr } from "./helper";
import './Lottery.css'

export default function Lottery() {
    let [ticket, setTicket] = useState(generateTicket(3));
    let [win, setWin] = useState('');

    let buyTicket = () => {
        let newTicket = generateTicket(3);
        let digitsum = sumArr(newTicket);
        setTicket(()=>newTicket);
        setWin(() => {
            return digitsum === 15 ? 'Congratulations, You Win' : 'Better Luck Next Time'
        });
    };

    return (
        <div className="ticket">
            <h3>Lottery Game</h3>
            <p>Lottery Ticket={ticket}</p>
            <button onClick={buyTicket}>Get new ticket</button>
            <h3>{win}</h3>
        </div>
    );
}