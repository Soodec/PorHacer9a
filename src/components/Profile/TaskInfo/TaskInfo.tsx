import {IonGrid,IonRow,IonCol,IonText} from "@ionic/react"
import {} from "../../../hooks"
import './TaskInfo.scss'

export function TaskInfo() {
    const totalTask = 80
    const completedTask = 37

  return (
    <div className="task-info-container">
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color='dark'>{totalTask}</IonText>
                    <IonText color='dark'>Tareas</IonText>
                </IonCol>
                <IonCol>
                    <IonText color='dark'>{completedTask}</IonText>
                    <IonText color='dark'>Completas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}
