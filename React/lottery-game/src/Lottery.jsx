import { useState } from "react";
import { generateTicket,sum} from "./helper";
import Ticket from "./Ticket";
import './Lottery.css'

export default function Lottery({n=3, winningSum=15}) {
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning= sum(ticket)===winningSum;

    let buyTicket = () => {
        setTicket(()=>generateTicket(n));
    };

    return (
        <div className="ticket">
            <h3>Lottery Game</h3>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}

// import { useState } from "react";
// import { generateTicket,sum } from "./helper";
// import './Lottery.css'

// export default function Lottery() {
//     let [ticket, setTicket] = useState(generateTicket(3));
//     let [win, setWin] = useState('');

//     let buyTicket = () => {
//         let newTicket = generateTicket(3);
//         let digitsum = sum(newTicket);
//         setTicket(()=>newTicket);
//         setWin(() => {
//             return digitsum === 15 ? 'Congratulations, You Win' : 'Better Luck Next Time'
//         });
//     };

//     return (
//         <div className="ticket">
//             <h3>Lottery Game</h3>
//             <p>Lottery Ticket={ticket}</p>
//             <button onClick={buyTicket}>Get new ticket</button>
//             <h3>{win}</h3>
//         </div>
//     );
// }

