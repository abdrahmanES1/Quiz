
import axiosInstance from "../../utils/axiosInstance";

/**
 * 
 * @param {ObjectId} id 
 * @returns  
 */
export default async function deleteMajor(id) {
    const res = await axiosInstance.delete('/majors/'+id);
    const data = await res.data;
    return data;
}