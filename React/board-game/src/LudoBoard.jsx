import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let inc = (col) => {
        setMoves(
            (prevMoves) => ({...prevMoves, [col]:prevMoves[col]+1,}
        ));
        console.log(`${col} moves= ${moves[col]}`)
    }

    return (
        <div>
            <p>Game Begins</p>
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