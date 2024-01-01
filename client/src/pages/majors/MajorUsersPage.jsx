import React from 'react'
import { useParams } from 'react-router'

function MajorUsersPage() {
    const { id } = useParams()
    return (
        <div>Major {id} UsersPage</div>
    )
}

export default MajorUsersPage