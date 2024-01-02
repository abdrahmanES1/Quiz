import React, { useEffect, useState } from 'react'
// import getAllMajors from '../../services/majors/getAllMajors'
import useMajorStore from '../../features/majors/useMajorStore'
function useMajors() {

    const getAllMajors = useMajorStore(state => state.getAllMajors);
    const isLoading = useMajorStore(state => state.isLoading);
    const majors = useMajorStore(state => state.majors);
    useEffect(() => {
        getAllMajors()
    }, [])

    return { majors, isLoading }
}

export default useMajors