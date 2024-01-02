import { useEffect, useState } from 'react'
import getMajorById from '../../services/majors/getMajorById'

function useMajorById(id) {
    const [major, setMajor] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getMajorById(id).then(res => {
            setMajor(res)
            setIsLoading(false);
        })

    }, [id])

    return { major, isLoading }
}

export default useMajorById;