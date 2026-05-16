import { useState } from "react";

export default function Lottery() {
    let [arr, setArr] = useState(['']);
    let [win, setWin] = useState('');

    function sumArr(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    let ticket = () => {
        let newArr = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10)
        ]
        let digitsum = sumArr(newArr);
        setArr(() => {
            return newArr
        });
        setWin(() => {
            return digitsum === 15 ? 'Congratulations, You Win' : 'Better Luck Next Time'
        });
    };


    return (
        <div>
            <h3>Lottery Game</h3>
            <p>Lottery Ticket={arr}</p>
            <button onClick={ticket}>Get new ticket</button>
            <h3>{win}</h3>
        </div>
    );
}