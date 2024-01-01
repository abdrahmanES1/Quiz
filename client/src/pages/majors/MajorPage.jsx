import React from 'react'
import { useParams } from 'react-router'

function MajorPage() {
    const { id } = useParams()
    return (
        <div>MajorPage. {id}</div>
    )
}

export default MajorPage