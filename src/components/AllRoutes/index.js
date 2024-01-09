import { useRoutes } from "react-router-dom"
import Route1 from "../../routes/route1"

const AllRoutes = ()=>{
    const elements = useRoutes(Route1)

    return(

        <>
            {elements}
        </>
    )
}
export default AllRoutes