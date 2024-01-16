import React from 'react'
import QuestionCardSkeleton from './QuestionCardSkeleton'
function ListQuestionsSkeletons({ listOf = 4 }) {
    return (
        <>
            {Array(listOf)
                .fill(1)
                .map((card, index) => (
                    <QuestionCardSkeleton key={index} />
                ))}
        </>

    )
}

export default ListQuestionsSkeletons