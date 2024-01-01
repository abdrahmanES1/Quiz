import axiosInstance from "../../utils/axiosInstance";


export default async function getAllExams() {
    const res = await axiosInstance.get('/exams');
    const data = await res.data;
    return data.exams;
}