'use client';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { MatrixWithId } from '@/types';
import SortableCard from './SortableCard';
import { levelOneCards } from '@/mockData/memoBlocks';
import { parseTable } from '@/lib/utils';
import MemoBlocksCard from './MemoBlocksCard';
import { FlipHorizontal2Icon, FlipVertical2Icon } from 'lucide-react';
import { colorsTemplateMatrix } from '@/constants';


type DragEventType = {
    activatorEvent: PointerEvent;
    active: {
        id: string;
        data: any;
        rect: any;
    };
    collisions: any[];
    delta: {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
    };
    over: {
        id: string;
        rect: any;
        data: any;
        disabled: boolean;
    };
};

function mirrorMatrix(matrix: MatrixWithId) {
    if (!matrix) return;
    const refMatrix = colorsTemplateMatrix;
    const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
    const rows = refMatrix.length;
    const cols = refMatrix[0].length;
    for (let i = 0; i < rows; i++) {
        copyMatrix.data.push([]);
        for (let j = 0; j < cols; j++) {
            if (!matrix.data[rows - 1 - i][j].isActive)
                copyMatrix.data[i].push({
                    note: refMatrix[i][j].note,
                    isActive: false,
                    isTied: false,
                });
            else copyMatrix.data[i].push(refMatrix[i][j]);
        }
    }
    return copyMatrix;
}

function flipMatrix(matrix: MatrixWithId) {
    if (!matrix) return;
    const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
    const rows = matrix.data.length;
    const cols = matrix.data[0].length;
    for (let i = 0; i < rows; i++) {
        copyMatrix.data.push([]);
        for (let j = 0; j < cols; j++) {
            copyMatrix.data[i].push(matrix.data[i][cols - 1 - j]);
        }
    }
    return copyMatrix;
}

const setInitialMatrixes = () => {
    function scrambleMatrix(matrix: MatrixWithId) {
        const [flip, mirror] = [Math.random() > 0.5, Math.random() > 0.5];
        let newMatrix = matrix;
        if (flip) newMatrix = flipMatrix(newMatrix) as MatrixWithId;
        if (mirror) newMatrix = mirrorMatrix(newMatrix) as MatrixWithId;
        return newMatrix;
    }

    const levelCards = levelOneCards.map(table => parseTable(table));
    const matrixes = levelCards.map(matrix => scrambleMatrix(matrix));
    // switch order of matrixes
    const matrixesCopy = [...matrixes];
    matrixesCopy.sort(() => Math.random() - 0.5);
    return matrixesCopy;
};

const MemoBlocksGame = () => {
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>([]);
    const [activeMatrixId, setActiveMatrixId] = useState<string>('');
    const levelCards = levelOneCards.map(table => parseTable(table));
    const activeMatrix = guessCards.find(m => m.id === activeMatrixId)!;

    useEffect(() => {
        setGuessCards(setInitialMatrixes());
    }, []);

    function changeMatrix(matrix: MatrixWithId | undefined) {
        if (!matrix) return;
        const newMatrixes = [...guessCards];
        newMatrixes.find(m => m.id === matrix.id)!.data = matrix.data;
        setGuessCards(newMatrixes);
    }

    const onDragEnd = (DragEvent: DragEventType) => {
        const { active, over } = DragEvent;
        if (active.id === over?.id) {
            return;
        }
        setGuessCards(cards => {
            const oldIndex = cards.findIndex(card => card.id === active?.id);
            const newIndex = cards.findIndex(card => card.id === over?.id);
            return arrayMove(cards, oldIndex, newIndex);
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (['ArrowLeft', 'ArrowRight', 'F', 'f'].includes(event.key)) {
            changeMatrix(mirrorMatrix(activeMatrix));
        }
        else if (['ArrowUp', 'ArrowDown', 'M', 'm'].includes(event.key)) {
            changeMatrix(flipMatrix(activeMatrix));
        }
        else if (event.key === 'Tab') {
            event.preventDefault();
            const activeIndex = guessCards.findIndex(card => card.id === activeMatrixId);
            const nextIndex = (activeIndex + 1) % guessCards.length;
            setActiveMatrixId(guessCards[nextIndex].id);
        }
    }

    return (
        <div className='flex flex-col gap-5 items-center justify-center mt-3' onKeyDown={handleKeyDown}>
            <div className='flex flex-row gap-3 justify-center items-center text-center'>
                <FlipVertical2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() => changeMatrix(mirrorMatrix(activeMatrix))} />
                <FlipHorizontal2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() => changeMatrix(flipMatrix(activeMatrix))}
                />
            </div>
            <div className='grid grid-cols-4 gap-6 justify-center max-w-fit self-center items-center'>
                {levelCards.map(card => (
                    <MemoBlocksCard key={`levelCard#${card.id}`} matrix={card.data} disabled />
                ))}
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={onDragEnd}>
                    <SortableContext
                        items={guessCards}
                        strategy={horizontalListSortingStrategy}>
                        {guessCards.map((card) => (
                            <SortableCard
                                key={card.id}
                                card={card}
                                isActive={card.id === activeMatrixId}
                                onClick={() => setActiveMatrixId(card.id)}
                            />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};
export default MemoBlocksGame;
