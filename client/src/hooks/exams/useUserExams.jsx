import { useEffect, useState } from 'react'
import getUserExams from '../../services/exams/getUserExams.js'

function useUserExams(id) {
    const [isLoading, setIsLoading] = useState(true);
    const [exams, setExams] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getUserExams(id)
            .then(exams => {
                setExams(exams);
                setIsLoading(false)
            })
            .catch(err => { setError(err?.response.data.message); setIsLoading(false) })
            .finally(_ => setIsLoading(false))

    }, [id])

    return { exams, isLoading, error }
}

export default useUserExams;