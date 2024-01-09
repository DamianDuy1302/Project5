import { getCookie } from "../../helpers/cookies"

const Home2 = () => {
    const userName = getCookie("fullName")

    return (
        <>
            <div className="route__title">
                <h2>Welcome, {userName}</h2>
            </div>
            <div className="route__content">
                
            </div>
        </>
    )
}
export default Home2