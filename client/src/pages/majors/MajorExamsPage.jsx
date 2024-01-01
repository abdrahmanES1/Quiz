import React from 'react'
import { useParams } from 'react-router'

function MajorExamsPage() {
    const { id } = useParams();
    return (
        <div>Major {id} ExamsPage</div>
    )
}

export default MajorExamsPage