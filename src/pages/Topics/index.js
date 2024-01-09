import { useEffect, useState } from "react"
import { getTopicsList } from "../../services/topicsServices"
import "./style.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import TopicsButton from "./TopicsButton"
const Topics = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchy = async () => {
            const res1 = await getTopicsList()
            console.log(res1)
            setData(res1)
        }
        fetchy()
    }, [])
    
    return (
        <>
            <h2>Topics</h2>
            {data && (
                <div className="route__container">
                    <table className="topic__table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Topic</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={"/quiz/" + (index+1)}>
                                            <TopicsButton topicName={item.name}/>
                                        </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}

        </>
    )
}
export default Topics