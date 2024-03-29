import axiosInstance from "../../utils/axiosInstance";


export default async function AddExam({ major, createdBy, name, description, deadline }) {
    const res = await axiosInstance.post('/exams', { major, createdBy, name, description, deadline });
    const data = await res.data;
    return data.exam;
}