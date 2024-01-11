import axiosInstance from "../../utils/axiosInstance";


export default async function getExamById(id) {
    const res = await axiosInstance.get('/exams/' + id);
    const data = await res.data;
    return data.exam;
}