import { useEffect, useState } from 'react'
import getExamResults from "../../services/results/getExamResults"

function useExamResults(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        getExamResults(id)
            .then(results => {
                setResults(results)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
            .finally(_ => setIsLoading(false))
        setIsLoading(false);
    }, [id])
    return { results, isLoading, error }

}

export default useExamResults;