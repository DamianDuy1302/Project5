import { useEffect } from "react";
import "./style.css"
import Swal from 'sweetalert2'
import { getUser } from "../../services/userServices";
import { setCookie } from "../../helpers/cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/Authen";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const res = await getUser(email, password)
        console.log(res)
        
        if (res && res.length > 0) {
            const data = res[0]
            setCookie("id", data.id, 1);
            setCookie("fullName", data.fullName, 1);
            setCookie("email", data.email, 1);
            setCookie("token", data.token, 1);
            navigate("/home2");
            // window.location.reload();
            dispatch(authen(true))
        }
        else {
            Swal.fire({
                title: "Something wrongs",
                text: "Please type your information correctly!",
                position: "center",
                color: "#011f4b",
                confirmButtonColor: "#005b96"
            });
        }

    }
    return (
        <div className="route__container">
            <div className="route__content--form">
                <div className="route__title">
                    <h2>Ready to quiz</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="login__input" type="email" name="email" placeholder="Email"
                        required />
                    <input className="login__input" type="password" name="password" placeholder="Password"
                        required />
                    <button type="submit" className="button button__login">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login