import { GiCheckMark } from "react-icons/gi";
import { BiErrorCircle } from "react-icons/bi";

export const Feedback = ({ feedback }) => {

    return (
        <div className="feedbackBlock"> 
            {feedback.type==="success" && <GiCheckMark className="feedback feedback-success-icon" />}
            {feedback.type==="error" && <BiErrorCircle className="feedback feedback-error" />}
            <p className={`feedback feedback-${feedback.type}`}>{feedback.message}</p>
        </div>
    )
}

