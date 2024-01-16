import { useEffect, useState } from 'react'
import { getExamResults } from "../../services/results/getExamResults"

function useExamResults(id){
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getExamResults(id).then(results => setResults(results)).finally(_ => setIsLoading(false))
        setIsLoading(false);
    }, [id])
    return { results, isLoading }
}

export default useExamResults;