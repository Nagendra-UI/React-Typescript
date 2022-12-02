import React from 'react';
import './styles.css';

type Player = 'X' | '0' | null

type SqaureProps = {
    winner: Player,
    val: Player,
    onCLick: () => void,
}

function Square({ winner, val, onCLick }: SqaureProps) {
    if (!val) {
        return <button className="btn" onClick={onCLick} disabled={Boolean(winner)}>{val}</button>
    }

    return <button className={`btn ${val === 'X' ? 'x' : 'o'}`} disabled>{val}</button>


}

export default Square