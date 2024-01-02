import React, { useEffect, useState } from 'react'
import getAllExams from '../../services/exams/getAllExams'

function useExams() {
    const [exams, setExams] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getAllExams().then(res => {
            setExams(res)
            setIsLoading(false);
        })

    }, [])

    return { exams, isLoading }
}

export default useExams;