import { pucblicRequest } from "../requestMethod";
import { loginFailed, loginStart } from "./userRedux"



export const login = async (dispatch, user) =>{
    dispatch(loginStart());

    try {
        const res=await pucblicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailed());
    }
}