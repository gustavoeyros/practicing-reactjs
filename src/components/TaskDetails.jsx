import React from "react";
import { useParams, useNavigate } from "react-router-dom";


import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () =>{  
    const navigate = useNavigate()
    const params = useParams()

    const handleBackButtonClick = () =>{
        navigate(-1)
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae soluta facilis expedita dolorem ab est sit, neque facere molestias delectus iusto, consectetur, impedit cum voluptate eius blanditiis temporibus pariatur!</p>
            </div>
        </>
    )
}

export default TaskDetails