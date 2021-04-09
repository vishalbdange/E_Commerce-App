import {AUTH} from "../constants/constants.js"
import api from "../api/index";
export const signUp = (formData,history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log("hello");
    dispatch({ type: AUTH, payload: data });
    // dispatch({type:VALID,payload:{msg:"Logged In Successfully"}})
    history.push("/");
  } catch (err) {
    cnsole.log(err.response.data);
    // dispatch({type:VALID,payload:data})
  }
};