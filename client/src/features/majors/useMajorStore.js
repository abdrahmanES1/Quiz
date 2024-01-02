import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import addMajor from '../../services/majors/addMajor';
import getAllMajors from '../../services/majors/getAllMajors';
import deleteMajor from '../../services/majors/deleteMajor';
import editMajor from '../../services/majors/editMajor';
export const useMajorStore = create(devtools(persist((set, get) => ({

    isLoading: false,
    majors: [],
    error: null,

    addMajor: async ({ name }) => {
        set({ isLoading: true })
        const major = await addMajor({ name });
        set({ majors: [...get().majors, major] })
        set({ isLoading: false })
        return major;
    },
    getAllMajors: async () => {
        set({ isLoading: true })
        set({ majors: [] })
        const majors = await getAllMajors();
        set({ majors })
        set({ isLoading: false })
        return majors
    },
    deleteMajor: async (id) => {
        set({ isLoading: true })
        const data = await deleteMajor(id);
        set({ majors: [...get().majors.filter(major => major._id !== id)] })
        set({ isLoading: false })
        return data;
    },
    updateMajor: async (id, { name }) => {
        set({ isLoading: true })
        const data = await editMajor(id, { name });
        let major = get().majors.find(major => major._id === id)
        major.name = name;
        set({ majors: [...get().majors.filter(major => major._id !== id), major] })
        set({ isLoading: false })
        return data;
    },

}),
    {
        name: 'majors', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useMajorStore