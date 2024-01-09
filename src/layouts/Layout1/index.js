import { NavLink, Outlet } from "react-router-dom"
import "./style.css"
import { getCookie } from "../../helpers/cookies"
import { useSelector } from "react-redux";
const Layout1 = () => {
    const token = getCookie("token");
    // console.log(token)
    var authen = useSelector(state => state.authenReducer)
    if(token.length>0){
        authen=true
    }
    // console.log(authen)
    return (
        <>
            <header>
                {(token.length>0 && authen) ? (
                    <>
                        <div className="header__logo">
                            <NavLink to="/home2">Quiz</NavLink>
                        </div>
                        <div className="header__navs">
                            <div className="header__navs--loginedLayout">
                                <div className="header__navs--items">
                                    <div className="header__nav">
                                        <NavLink to="/home2">Home</NavLink>
                                    </div>
                                    <div className="header__nav">
                                        <NavLink to="/topics">Topics</NavLink>
                                    </div>
                                    <div className="header__nav">
                                        <NavLink to="/answers">Answers</NavLink>
                                    </div>
                                </div>

                                <div className="header__nav header__navs--logout">
                                    <NavLink to="/logout">Logout</NavLink>
                                </div>
                                <div className="tab__line"></div>
                            </div>

                        </div>
                    </>
                ) : (<>
                    <div className="header__logo">
                        <NavLink to="/">Quiz</NavLink>
                    </div>
                    <div className="header__navs">
                        <div className="header__navs--unloginLayout">
                            <div className="header__nav">
                                <NavLink to="/register">Register</NavLink>
                            </div>
                            <div className="header__nav header__navs--login">
                                <NavLink to="/login">Login</NavLink>
                            </div>
                        </div>
                    </div>
                </>)}

            </header>
            <main>
                <Outlet />
            </main>


            <footer>
                <div className="footer__copyright">
                    Copyright design by DamianDuy1302
                </div>
            </footer>


        </>
    )
}
export default Layout1