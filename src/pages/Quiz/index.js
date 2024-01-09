import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getTopic, getTopicsList } from "../../services/topicsServices"
import { getQuestionsList } from "../../services/questionsServices"
import { getCookie } from "../../helpers/cookies"
import "./style.css"
import Swal from 'sweetalert2'
import { postAnswers } from "../../services/answersServices"
const Quiz = () => {
    const param = useParams()
    const [topicName, setTopicName] = useState()
    const [questionsList, setQList] = useState()
    useEffect(() => {
        const fetchy = async () => {
            const res1 = await getTopic(param.id)
            console.log(res1)
            setTopicName(res1[0].name)
            const qList = await getQuestionsList(param.id)
            // console.log(qList)
            setQList(qList)
        }
        fetchy()
    }, [])

    console.log(questionsList)

    const navy = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        var answers = []
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#005b96",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const userId = getCookie("id")
                for (let i = 0; i < e.target.elements.length; i++) {
                    // console.log(e.target.elements[i].checked)
                    if (e.target.elements[i].checked) {
                        let answer = {
                            "questionsId": parseInt(e.target.elements[i].name),
                            "answer": parseInt(e.target.elements[i].value)
                        }
                        answers.push(answer)
                    }
                }
                console.log(answers)
                const data = {
                    "userId": parseInt(userId),
                    "topicId": parseInt(param.id),
                    "answers": answers,
                }
                console.log(data)
                const res = await postAnswers(data)
                if (res) {
                    navy(`/result/${res.id}`)
                }
            }
        });


    }
    return (
        <>
            <h2>Quiz: {topicName}</h2>
            {questionsList && (
                <div className="questions">
                    <form onSubmit={handleSubmit} className="questions__form">
                        <div className="questions">
                            {
                                questionsList.map((item, index) => (
                                    <div key={item.id} className="question">
                                        <p>{index + 1}. {item.question}</p>

                                        {item.answers.map((answer, indexAnswer) => (
                                            <div className="answer" key={indexAnswer}>
                                                <input name={item.id}
                                                    id={`quiz-${item.id}-${indexAnswer}`}
                                                    type="radio"
                                                    value={indexAnswer}
                                                    className="answer__check"
                                                />
                                                <label htmlFor={`quiz-${item.id}-${indexAnswer}`}
                                                    className="answer__lable">{answer}</label>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>

                        <button type="submit" className="button button--confirm">Submit</button>
                    </form>

                </div>
            )}
        </>
    )
}
export default Quiz