import { useNavigate } from "react-router-dom";

export const DetailAnswerButton = (props)=>{
    const {item} = props
    const navy = useNavigate();
    const handleDetail = ()=>{
        // console.log(item.id)
        navy(`/result/${item.id}`)
    }
    return (
        <>
             <button onClick={handleDetail} className="button button--detail button--confirm">Detail</button>
        </>
    )
}