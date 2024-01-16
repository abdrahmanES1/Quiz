import { useEffect, useState } from 'react'
import  getUserResults  from "../services/results/getUserResults"

function useExamResults(id){
    const [isLoading1, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getUserResults(id).then(results => setResults(results)).finally(_ => setIsLoading(false))
        setIsLoading(false);
    }, [id])
    return { results, isLoading1 }
}

export default useExamResults;