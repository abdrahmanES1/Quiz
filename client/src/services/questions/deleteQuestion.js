import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {ObjectId} question 
 * @returns 
 */
export default async function deleteQuestion(id) {
    const res = await axiosInstance.delete('/questions/' + id);
    const data = await res.data;

    return data;
}