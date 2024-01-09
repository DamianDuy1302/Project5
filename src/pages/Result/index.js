import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAnswersbyId } from "../../services/answersServices";
import { getQuestionsList } from "../../services/questionsServices";
import "./style.css"
import Swal from 'sweetalert2'
const Result = () => {
    const param = useParams()
    const [dataResult, setDataResult] = useState();
    const [topicId, setTopicId] = useState();
    // const [score, setScore] = useState(0);
    const [userScore, setUserScore] = useState();
    const [maxScore, setMaxScore] = useState();
    useEffect(() => {
        var tmpScr = 0
        var maxScr = 0
        const fetchy = async () => {
            const dataAnswers = await getAnswersbyId(param.id)
            const dataQuestions = await getQuestionsList(dataAnswers[0].topicId)
            // console.log(dataAnswers)
            // console.log(dataQuestions)

            var result = []
            for (let i = 0; i < dataQuestions.length; i++) {
                let userAnswer = -1;
                maxScr += 1;
                const answer = dataAnswers[0].answers.find(item => item.questionsId === dataQuestions[i].id)
                // console.log(answer)
                if (answer) {
                    userAnswer = answer.answer
                    if (userAnswer === dataQuestions[i].correctAnswer) {
                        tmpScr += 1
                    }
                    // console.log(answer.answer)
                }

                result.push({
                    ...dataQuestions[i],
                    "userAnswer": userAnswer
                })
            }
            // console.log(result)
            setDataResult(result)
            setTopicId(result[0].topicId)
            // console.log(dataResult)
            setMaxScore(maxScr)
            setUserScore(tmpScr)
        }
        fetchy()

    }, [])
    const navy = useNavigate();
    const handleReQuiz = () => {
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     // icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#005b96",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes"
        // }).then(async (result) => {
        //     if (result.isConfirmed) {
        //         navy(`/quiz/${topicId}`)
        //     }
        // });
        navy(`/quiz/${topicId}`)
    }
    console.log(userScore, maxScore)
    return (
        <>
            <h2>Result</h2>
            {dataResult && (
                <div className="result">
                    <div className="score">
                        <span>Correct: {userScore}/{maxScore}</span>
                        <span>Point: {Math.round((userScore / maxScore)*100)/10}</span>
                    </div>
                    {dataResult.map((item, index) => (
                        <div className="question">
                            <p>{index + 1}. {item.question}</p>
                            {item.answers.map((answer, indexAnswer) => (
                                <div className="answer" key={indexAnswer}>
                                    <input checked={(indexAnswer == item.userAnswer) ? "checked" : ""}
                                        type="radio"
                                    />
                                    <label className={(indexAnswer === item.correctAnswer) ? "correctAnswer" : ((indexAnswer !== item.correctAnswer && indexAnswer === item.userAnswer) ? "wrongAnswer" : "")}>{answer}</label>
                                </div>
                            ))}
                        </div>
                    ))}

                    <button onClick={handleReQuiz} className="button button--confirm">ReQuiz</button>
                </div>

            )}
        </>
    )
}
export default Result