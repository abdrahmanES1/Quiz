import axiosInstance from 'utils/axiosInstance'


export default async function addUser({ firstname, lastname, email, password, role, major = null }) {
    let res = await axiosInstance.post("/register", { firstname, lastname, email, password, role, major })
    const data = await res.datarxà;;
    return data
}
