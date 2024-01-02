import axiosInstance from "../../utils/axiosInstance";


export default async function editMajor(id, { name }) {
    const res = await axiosInstance.update('/majors' + id, { name });
    const data = await res.data;
    return data;
}