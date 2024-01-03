import { useEffect, useState } from 'react'
import getUserExams from '../../services/exams/getUserExams.js'

function useUserExams(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [exams, setExams] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        getUserExams(id).then(exams => setExams(exams)).finally(_ => setIsLoading(false))
        setIsLoading(false);
    }, [id])

    return { exams, isLoading }
}

export default useUserExams;