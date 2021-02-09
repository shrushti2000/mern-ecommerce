import axios from "../helpers/axios"
import { categoryConstants } from "./constants"

export const getAllCategory=()=>{
    return async dispatch=>{
        dispatch({type:categoryConstants.GET_ALL_CATEGORIES_REQUEST})
        const res=await axios.get(`category/getCategories`)
        if(res.status===200){
            const {categoryList}=res.data;
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{categories:categoryList}
            })
        }else{
            dispatch({type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.error}
            })
        }
        
    }
}

export const addCategory=(form)=>{
    return async dispatch=>{
        try{
            const res=await axios.post(`/category/create`,form)
            console.log(res)
        }
       catch(error){
          // const {}=error.response;
           console.log(error)
       }
    }
}