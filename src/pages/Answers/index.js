import { useEffect, useState } from "react"
import { getCookie } from "../../helpers/cookies"
import { getAnswersbyUserId } from "../../services/answersServices"
import { getTopicsList } from "../../services/topicsServices"
import { useNavigate } from "react-router-dom"
import { DetailAnswerButton } from "./DetailAnswerButton"

const Answers = () => {
    const [data, setData] = useState();
    const [topics, setTopics] = useState();
    const userId = getCookie("id");
    // const userName = getCookie("fullName")
    // console.log(userId, userName)
    useEffect(() => {
        const fetchy = async () => {
            const res = await getAnswersbyUserId(userId)
            setData(res)
            console.log(res)
            const res1 = await getTopicsList()
            setTopics(res1)
            console.log(res1)
            console.log (topics)
        }
        
        fetchy()

        

    }, [])
    
    return (
        <>
            <h2>Your answers</h2>
            {data !== undefined && topics !== undefined && (
                <div className="route__container">
                    <table className="answer__table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Topic</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{topics[item.topicId-1].name}</td>
                                    <DetailAnswerButton item={item}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}
export default Answers