
import axiosInstance from "../../utils/axiosInstance";


export default async function getAllMajors() {
    const res = await axiosInstance.get('/majors');
    const data = await res.data;
    return data.majors;
}