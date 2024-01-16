import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {*} userId 
 * @returns 
 */

export default async function getUserResults(userId) {
    const res = await axiosInstance.get(`/users/${userId}/results`);
    const data = await res.data;
    return data.results;
}