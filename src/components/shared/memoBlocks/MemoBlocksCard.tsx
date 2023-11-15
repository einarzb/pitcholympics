import React from 'react'
import { Matrix, MemoBlockCardMelody } from '@/types'
import MemoBlocksMatCell from './MemoBlocksCell';

type Props = {
    matrix: Matrix // matrix of the card (8x4), each cell is a contains a note and isActive & isTied flags
}
const MemoBlocksCard = ({ matrix }: Props) => {

    // const melody: MemoBlockCardMelody ; // TODO: get the melody by the matrix active notes

    const handlePlayMelody = () => {
        // play the melody
    }


    return (
        <div className='shadow-lg drop-shadow-lg rounded-lg p-1.5 bg-light-surface-primary dark:bg-dark-surface-primary '>
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row">
                    {row.map((cell, colIndex) => (
                        <MemoBlocksMatCell key={cell.note + rowIndex + colIndex} cell={cell} colIndex={colIndex} rowIndex={rowIndex} />
                    ))}
                </div>
            ))}
            <div className="flex flex-row justify-center">
                <button className="rounded-full w-1/3 h-10 bg-slate-300 fixed self-center" onClick={handlePlayMelody}>Play</button>
            </div>
        </div>
    )
}

export default MemoBlocksCard