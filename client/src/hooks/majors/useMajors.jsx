import React, { useEffect, useState } from 'react'
import getAllMajors from '../../services/majors/getAllMajors'

function useMajors() {
    const [majors, setMajors] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getAllMajors().then(res => {
            setMajors(res)
            setIsLoading(false);
        })

    }, [])

    return { majors, isLoading }
}

export default useMajors