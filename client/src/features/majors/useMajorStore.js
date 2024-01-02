import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import axiosInstance from "../../utils/axiosInstance";
import addMajor from '../../services/majors/addMajor';
import getAllMajors from '../../services/majors/getAllMajors';

export const useMajorStore = create(devtools(persist((set, get) => ({

    isLoading: false,
    majors: [],
    error: null,

    addMajor: async ({ name }) => {
        set({ isLoading: true })
        const res = await addMajor({ name });
        const data = await res.data;
        set({ majors: [...get().majors, { ...data.major }] })
        set({ isLoading: false })
    },
    getAllMajors: async () => {
        set({ isLoading: true })
        const res = await getAllMajors();
        const majors = res.data;
        set({ majors })
        set({ isLoading: false })
    },


}),
    {
        name: 'majors', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useMajorStore