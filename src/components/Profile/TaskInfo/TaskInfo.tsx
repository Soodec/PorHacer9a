import {IonGrid,IonRow,IonCol,IonText} from "@ionic/react"
import { useTaks } from "../../../hooks"
import './TaskInfo.scss'

export function TaskInfo() {
    // const totalTask = 80
    // const completedTask = 37
    const {totalTask,totalTaskCompleted} = useTaks()

  return (
    <div className="task-info-container">
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color='dark'>{totalTask}</IonText>
                    <IonText color='dark'>Tareas</IonText>
                </IonCol>
                <IonCol>
                    <IonText color='dark'>{totalTaskCompleted}</IonText>
                    <IonText color='dark'>Completas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}
