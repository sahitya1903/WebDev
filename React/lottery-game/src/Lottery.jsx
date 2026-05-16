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
            return digitsum === 15 ? 'Congratulations, you won' : 'xxxx'
        });
    };


    return (
        <>
            <h3>Lottery {win}</h3>
            <p>Lottery Ticket={arr}</p>
            <button onClick={ticket}>Get new ticket</button>
        </>
    );
}