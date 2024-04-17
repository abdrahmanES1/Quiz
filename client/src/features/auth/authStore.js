import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import axiosInstance from "../../utils/axiosInstance";

export const useAuthStore = create(devtools(persist((set, get) => ({
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,

    register: async ({ firstname, lastname, email, password }) => {
        // set({ error: null })
        // try {
        //     set({ isLoading: true })
        //     let response = await axiosInstance.post("/register", { firstname, lastname, email, password })
        //     set({ token: await response.data.token, isAuthenticated: true })
        //     response = await axiosInstance.get("/me", {
        //         headers: {
        //             Authorization: `Bearer ${get().token}`
        //         }
        //     })
        //     set({ user: await response.data.user, isAuthenticated: true })
        //     return response.data
        // } catch (err) {
        //     set({ error: err?.response?.data?.message, isLoading: false })
        // } finally {
        //     set({ isLoading: false })
        // }

    },
    login: async (email, password) => {
        set({ error: null })
        try {
            set({ isLoading: true })
            let response = await axiosInstance.post("/login", { email, password })
            set({ token: await response.data.token, refreshToken: await response.data.refreshToken, isAuthenticated: true })
            await get().getMe(get().token);
            return response.data
        } catch (err) {
            set({ error: err?.response?.data?.message, isLoading: false })
        } finally {
            set({ isLoading: false })
        }

    },
    logout: () => {
        set({
            token: null,
            refreshToken: null,
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
    },
    updateAcccesToken: async (accessToken) => {
        set({ token: accessToken })
    }
}),
    {
        name: 'auth', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useAuthStore