import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArr]= useState(['no moves']); 

    let inc = (col) => {
    //spread operator used for making address copy to change state variable to trigger rerendering of component 
        setMoves(
            (prevMoves) => ({...prevMoves, [col]:prevMoves[col]+1,}
        ));
        console.log(`${col} moves= ${moves[col]}`);

        //change in original array, so no rerendering
        // arr.push(`${col} moves `);
        // setArr(arr);

        //spread array and then set
        // setArr([...arr,` ${col}`]) //this is also correct way

        setArr((prevMoves)=>{
            return [...prevMoves,` ${col}`]
        })
        console.log(arr);
    }

    return (
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves: {moves.blue}</p>
                <button style={{ backgroundColor: 'blue' }} onClick={() => inc('blue')}>+1</button>
                <p>Red Moves: {moves.red}</p>
                <button style={{ backgroundColor: 'red' }} onClick={() => inc('red')}>+1</button>
                <p>Green Moves: {moves.green}</p>
                <button style={{ backgroundColor: 'green' }} onClick={() => inc('green')}>+1</button>
                <p>Yellow Moves: {moves.yellow}</p>
                <button style={{ backgroundColor: 'yellow' }} onClick={() => inc('yellow')}>+1</button>
            </div>
        </div>
    )
}