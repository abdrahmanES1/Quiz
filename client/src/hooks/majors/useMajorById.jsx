import { useEffect, useState } from 'react'
import getMajorById from '../../services/majors/getMajorById'

function useMajorById(id) {
    const [major, setMajor] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        getMajorById(id).then(res => {
            setMajor(res)
            setIsLoading(false);
        })
            .catch(err => { setError(err); setIsLoading(false) })

    }, [id])

    return { major, isLoading, error }
}

export default useMajorById;