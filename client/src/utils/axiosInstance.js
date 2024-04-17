import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + "/api",
});


instance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const auth = JSON.parse(sessionStorage.getItem('auth'))
    let refreshToken = auth.state.refreshToken;
    const originalRequest = error.config;
    if (error.config.url !== "/refreshToken" && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (refreshToken && refreshToken !== "") {
            originalRequest.headers['Authorization'] = `Bearer ${refreshToken}`;
            instance.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;

            await instance.post('/refreshToken').then((response) => {
                let newAuth = { ...auth, state: { ...auth.state, token: response.data.accessToken } }

                sessionStorage.setItem("auth", JSON.stringify(newAuth))
                originalRequest.headers['Authorization'] = `Bearer ${response?.data.accessToken}`;
                instance.defaults.headers.common['Authorization'] = `Bearer ${response?.data.accessToken}`;
            }).catch((err) => {
                refreshToken = null;
            });
            return instance(originalRequest);
        }
    }
    return Promise.reject(error);
});
export default instance;