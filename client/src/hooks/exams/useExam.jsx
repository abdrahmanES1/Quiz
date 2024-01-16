import { useEffect, useState } from 'react'
import getExamById from '../../services/exams/getExam'

function useExam(id) {
    const [error, setError] = useState(null)
    const [exam, setExam] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            await getExamById(id).then(res => { setExam(res); setIsLoading(false) })
                .catch(err => { setError(err); setIsLoading(false) })
                .finally(() => setIsLoading(false))

        }
        getData();
    }, [id])

    return { exam, isLoading, error }
}

export default useExam;