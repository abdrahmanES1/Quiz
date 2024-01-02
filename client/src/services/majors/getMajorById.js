
import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {ObjectId} id 
 * @returns  
 */
export default async function getMajorById(id) {
    const res = await axiosInstance.get('/majors/'+id);
    const data = await res.data;
    return data.major;
}