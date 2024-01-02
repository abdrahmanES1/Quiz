import axiosInstance from "../../utils/axiosInstance";


export default async function editMajor(id, { name }) {
    const res = await axiosInstance.put('/majors/' + id, { name });
    const data = await res.data;
    return data;
}