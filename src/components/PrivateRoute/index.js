import { Navigate, Outlet } from "react-router-dom"
import { getCookie } from "../../helpers/cookies"

const PrivateRoute = ()=>{
    const token = getCookie("token")
    return (

        <>
            {token? <Outlet/> : <Navigate to="/login"/>}
        </>

    )
}
export default PrivateRoute