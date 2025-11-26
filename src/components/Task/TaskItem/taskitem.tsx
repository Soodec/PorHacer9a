import React from "react"
import './taskitem.scss'
import {TaskItemTypes} from './taskitem.types'
import { IonCheckbox } from "@ionic/react"
import { DateTime } from "luxon"
import { useTaks } from "../../../hooks"

export function TaskItem(props:TaskItemTypes.Props){
    const {task} = props
    const {checkUncheckComplete} = useTaks()
    const formatDate = (date:Date):string=>{
        const time = new Date(date)
        return time.toISOString()
    }
    const onClickCheckbox = (event:any)=>{
        const isChecked = event.detail.checked
        checkUncheckComplete(task.id,isChecked)
    }

    return(
       <div className="task-item">
        <div className="task-item__info">
            <span>{task.description}</span>
            <span>{DateTime.fromISO(task.create_at).toRelative()}</span>
        </div>
        <IonCheckbox checked={task.completed} onIonChange={onClickCheckbox} />
       </div>
    )
}