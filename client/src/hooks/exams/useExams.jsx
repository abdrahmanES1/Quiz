import React, { useEffect, useState } from 'react'
import useExamStore from '../../features/exams/useExamStore'

function useExams() {

    const getAllExams = useExamStore(state => state.getAllExams);
    const isLoading = useExamStore(state => state.isLoading);
    const exams = useExamStore(state => state.exams);
    // const [exams, setExams] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllExams();
    }, [])

    return { exams, isLoading }
}

export default useExams;