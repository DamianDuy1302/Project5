import { useEffect, useState } from "react";
import { setCookie } from "../../helpers/cookies";
import { getUser } from "../../services/userServices";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/Authen";
const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target.elements.fullname.value;
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        var newUser = {}

        const fetchy = async (obj) => {
            const res1 = await fetch("http://localhost:3002/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            const res2 = await res1.json()
            return res2
        }
        const res2 = await getUser(email)
        console.log(res2)
        if(res2.length>0){
            Swal.fire({
                title: "This email has been registered",
                confirmButtonColor: "#005b96",
            });
        }
        
        else{
            newUser = {
                fullName: fullName,
                email: email,
                password: password,
                token: Date.now()
            }
            const res = await fetchy(newUser)
            console.log(res)
                if(res && res.id){
                    setCookie("fullname", newUser.fullName, 1);
                    setCookie("email", newUser.email, 1);
                    setCookie("token", newUser.token, 1);
                    navigate("/home2");
                    dispatch(authen(true))
                }

        }

    }
    return (
        <>
            <div className="route__container">
                <div className="route__content--form">
                    <div className="route__title">
                        <h2>Join us</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input className="login__input" type="name" name="fullname" placeholder="Full Name"
                            required />
                        <input className="login__input" type="email" name="email" placeholder="Email"
                            required />
                        <input className="login__input" type="password" name="password" placeholder="Password"
                            required />
                        <button className="button button__login">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register