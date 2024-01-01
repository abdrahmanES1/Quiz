import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import axiosInstance from "../../utils/axiosInstance";

export const useExamStore = create(devtools(persist((set, get) => ({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
    // name : { type:String, required : [true, "Question name required"]},
    // description : { type:String, required : [true, "Question description required"]},
    // exam : { type:Schema.ObjectId , ref:"Exam" , required:true},
    // responses: [{ type: [Schema.ObjectId], ref: "Response" }]
    addQuestion: async () => {
        

    },
    login: async () => {
        
    },

   
}),
    {
        name: 'exam', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })))

// Action creators are generated for each case reducer function

export default useExamStore