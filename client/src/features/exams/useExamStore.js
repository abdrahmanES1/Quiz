import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import getAllExams from '../../services/exams/getAllExams';
// import axiosInstance from "../../utils/axiosInstance";

export const useExamStore = create(devtools(persist((set, get) => ({
    // token: localStorage.getItem('token'),
    // isAuthenticated: false,
    isLoading: false,
    exams: [],
    error: null,
    // name : { type:String, required : [true, "Question name required"]},
    // description : { type:String, required : [true, "Question description required"]},
    // exam : { type:Schema.ObjectId , ref:"Exam" , required:true},
    // responses: [{ type: [Schema.ObjectId], ref: "Response" }]
    getAllExams: async () => {
        set({ isLoading: true })
        set({ exams: [] })
        const exams = await getAllExams();
        set({ exams })
        set({ isLoading: false })
        return exams
    },

    // deleteExam: async (id) => {
    //     set({ isLoading: true })
    //     const data = await deleteExam(id);
    //     set({ exams: [...get().exams.filter(exam => exam._id !== id)] })
    //     set({ isLoading: false })
    //     return data;
    // },
    // updateExam: async (id, { name }) => {
    //     set({ isLoading: true })
    //     const data = await editExam(id, { name });
    //     let exam = get().exams.find(exam => exam._id === id)
    //     exam.name = name;
    //     set({ exams: [...get().exams.filter(exam => exam._id !== id), exam] })
    //     set({ isLoading: false })
    //     return data;
    // },
    
    login: async () => {
        
    },

   
}),
    {
        name: 'exam', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useExamStore