import React, { useEffect, useState } from 'react'
import Square from '../components/square';
import './styles.css';

type Player = 'X' | '0' | null

function calculateWinner(sqr: Player[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        console.log(sqr[a], sqr[b], sqr[c])
        if (sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]) {

            return sqr[a]
        }
    }
    return null
}

function Board() {
    const [squares, setSquare] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>(Math.round(Math.random() * 1) ? "X" : "0")
    const [winner, setWinner] = useState<Player>(null)
    const setSquareValue = (index: number) => {
        const newData = squares.map((val, i) => {
            if (i === index) {
                return currentPlayer
            }
            return val
        })
        console.log(newData)
        setSquare(newData)
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
    }

    useEffect(() => {
        const player: Player = calculateWinner(squares)
        console.log(player)
        if (player) {
            setWinner(player);
            setCurrentPlayer(player)
        }
    }, [squares])


    return (
        <>
            {Boolean(!winner) ? <h1>Hey player {currentPlayer}, it's ur turn</h1> : <h1>Woooo! player {currentPlayer} won</h1>}
            <div className="board">
                {Array(9).fill(null).map((_, i) => {
                    return <Square key={i} winner={winner} val={squares[i]} onCLick={() => {
                        setSquareValue(i)
                    }} />
                })}
            </div>
        </>
    )
}

export default Board