
import { loginAPI } from './../../api/api';
import dontAvatar from '../../assets/images/123.png'


let initialState = {

    activeIDUser: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: ''
}




const AuthReducer = (state = initialState, active) => {

    switch (active.type) {
        case "SET_DATE_USER":

            return { ...state, ...active.data, isAuth: true }
        case "SET_PICTURE_USER":

            return { ...state, avatar: active.urlPicture }
        default: return { ...state }
    }
}



export const setDateUser = (data) => ({ type: "SET_DATE_USER", data })
export const setPictureUser = (urlPicture) => ({ type: "SET_PICTURE_USER", urlPicture })

export const login = () => {
    return (dispatch) => {
        loginAPI.auth().then(response => {

            if (response.resultCode === 0) {
                let data = { activeIDUser: response.data.id, email: response.data.email, login: response.data.login }
                dispatch(setDateUser(data))
                loginAPI.getUserDate(response.data.id).then(response2 => {
                    dispatch(setPictureUser(response2.photos.small === null ? dontAvatar : response2.photos.small))
                })
            }
        })
    }
}
export default AuthReducer;