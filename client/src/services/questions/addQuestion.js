import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {Question} question 
 * @returns 
 */
export default async function addQuestion(question) {
    const res = await axiosInstance.post('/questions', { ...question });
    const data = await res.data;

    return data.question;
}