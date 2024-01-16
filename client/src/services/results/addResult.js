import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {ObjectId} examId exam id
 *  @param {ObjectId} userId user id
 *  @param {ObjectId} grade garde
 * @returns 
 */

export default async function addResult(examId, userId, grade) {
    const res = await axiosInstance.post(`/results`, { exam: examId, user: userId, grade, createdBy: userId });
    const data = await res.data;
    return data;
}