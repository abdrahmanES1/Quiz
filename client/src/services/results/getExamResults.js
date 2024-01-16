import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {*} examId 
 * @returns 
 */

export default async function getExamResults(examId) {
    const res = await axiosInstance.get(`/exams/${examId}/results`);
    const data = await res.data;
    return data.results;
}