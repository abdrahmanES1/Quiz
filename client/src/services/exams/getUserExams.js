import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {*} userId 
 * @returns 
 */
export default async function getUserExams(userId) {
    const res = await axiosInstance.get(`/users/${userId}/exams`);
    const data = await res.data;
    return data.exams;
}