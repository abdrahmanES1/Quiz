import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import axiosInstance from "../../utils/axiosInstance";

export const useAuthStore = create(devtools(persist((set, get) => ({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,

    register: async ({ firstname, lastname, email, password }) => {
        set({ error: null })
        try {
            set({ isLoading: true })
            let response = await axiosInstance.post("/register", { firstname, lastname, email, password })
            set({ token: await response.data.token, isAuthenticated: true })
            localStorage.setItem("token", await response.data.token)
            response = await axiosInstance.get("/me", {
                headers: {
                    Authorization: `Bearer ${get().token}`
                }
            })
            set({ user: await response.data.user, isAuthenticated: true })
            return response.data
        } catch (err) {
            set({ error: err?.response?.data?.message, isLoading: false })
        } finally {
            set({ isLoading: false })
        }

    },
    login: async (email, password) => {
        set({ error: null })
        try {
            set({ isLoading: true })
            let response = await axiosInstance.post("/login", { email, password })
            set({ token: await response.data.token, isAuthenticated: true })
            await get().getMe(get().token);
            return response.data
        } catch (err) {
            set({ error: err?.response?.data?.message, isLoading: false })
        } finally {
            set({ isLoading: false })
        }

    },
    logout: () => {
        localStorage.removeItem('token')
        set({
            token: localStorage.getItem('token'),
            isAuthenticated: false,
            isLoading: false,
            user: null,
            error: null,
        })
    },
    getMe: async (token) => {
        set({ error: null })
        try {
            set({ isLoading: true })

            let response = await axiosInstance.get("/me", {
                headers: {
                    Authorization: `Bearer ${get().token}`
                }
            })
            set({ user: await response.data.user, isAuthenticated: true })
        } catch (err) {
            set({ error: err?.response?.data?.message, isLoading: false })
        } finally {
            set({ isLoading: false })
        }
    }
}),
    {
        name: 'auth', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useAuthStore