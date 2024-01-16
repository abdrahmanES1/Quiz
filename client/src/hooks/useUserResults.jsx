import { useEffect, useState } from 'react'
import getUserResults from "../services/results/getUserResults"

function useUserResults(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        getUserResults(id)
            .then(results => {
                setResults(results)
                setIsLoading(false)
            }).catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
            .finally(_ => setIsLoading(false))
        setIsLoading(false);
    }, [id])
    return { results, isLoading, error }
}

export default useUserResults;

