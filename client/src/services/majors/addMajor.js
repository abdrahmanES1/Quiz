import axiosInstance from "../../utils/axiosInstance";


export default async function addMajor({ name }) {
    const res = await axiosInstance.post('/majors', { name });
    const data = await res.data;
    return data;
}