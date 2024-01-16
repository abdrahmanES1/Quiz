import React from 'react'
import ExamCardSkeleton from './ExamCardSkeleton'

function ListExamsCardsSekeltons({ listOf = 4 }) {
    return (
        <>
            {Array(listOf)
                .fill(1)
                .map((card, index) => (
                    <ExamCardSkeleton key={index} />
                ))}
        </>
    )
}

export default ListExamsCardsSekeltons