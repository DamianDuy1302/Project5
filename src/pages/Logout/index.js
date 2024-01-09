import { useNavigate } from "react-router-dom"
import { deleteAllCookies, deleteCookie } from "../../helpers/cookies"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/Authen";
import Swal from 'sweetalert2'
const Logout = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        // icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#005b96",
        cancelButtonColor: "#d44e00",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
            deleteAllCookies()
            navigate("/login")
            dispatch(authen(false))
            window.location.reload()
        }
        else{
            navigate("/home2")
        }
      });
    
    return (
        <>
            
        </>
    )
}
export default Logout