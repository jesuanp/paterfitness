import axios from "axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { useReducer } from 'react'


export default UserState = props => {

    const initialState = {
        login: false,
        loading: false,
        user: {}
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const createUser = async (user) => {

        try {

            const response = await axios.post(`http://192.168.1.104:3001/api/user`, user)

            dispatch({
                type: "CREATE_USER",
                payload: response.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const findOneUser = async (email) => {

        try {
            
            const response = await axios.get(`http://192.168.1.104:3001/api/user?email=${email}`)

            console.log('UserState',response.data)

            dispatch({
                type: "FIND_ONE_USER",
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    const createUserData = async (userdata) => {

        try {
            
            const response = await axios.post(`http://192.168.1.104:3001/api/user-info/${userdata.userId}`, userdata)
    
            if(response.data.msg === 'No existe el usuario') {
                throw new Error('No existe el usuario')
            }
            console.log(response.data)
    
            dispatch({
                type: 'SIGNIN',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider
            value={{
                login: state.login,
                loading: state.loading,
                user: state.user,

                createUser,
                findOneUser,
                createUserData
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
