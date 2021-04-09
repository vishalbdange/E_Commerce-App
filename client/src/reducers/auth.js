import {AUTH} from '../constants/actions'

const authReducer = (authData={},action)=>{
    switch(action.type){
        case AUTH:
            console.log(action.payload)
            localStorage.setItem('profile',JSON.stringify(action?.payload))
            var id = JSON.parse(localStorage.getItem('profile')).profile.i
            return action.payload
        default:
            return authData
    }
}

export default authReducer;