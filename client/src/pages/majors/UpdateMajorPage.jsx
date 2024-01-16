import React from 'react'
import { useParams } from 'react-router'

//TODO : Update Major Page
function UpdateMajorPage() {
    const { id } = useParams()
    return (
        <div>UpdateMajor {id}</div>
    )
}

export default UpdateMajorPage