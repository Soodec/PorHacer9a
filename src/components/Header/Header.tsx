import { IonHeader, IonAvatar, IonProgressBar, IonText, IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { useUser, useTaks } from "../../hooks";
import './Header.scss'

export function Header(){
    const {avatar} =useUser()
    const {totalTask, totalTaskCompleted, openFormTask} = useTaks()
    const valueBar = (totalTaskCompleted * 100)/totalTask
    return(
        <IonHeader className="custom-header">
            <div className="custom-header-top">
                <IonAvatar>
                    <img src={avatar}/>
                </IonAvatar>
                <IonIcon icon={addCircleOutline} onClick={openFormTask} />
            </div>
            <div className="progress">
                <IonText color='dark' className='progress__title'>
                    Tu Progreso
                </IonText>
                <div className="progress__info">
                    <IonText color='dark'>Tareas</IonText>
                    <IonText>
                        {totalTaskCompleted}/{totalTask}
                    </IonText>
                </div>
                <IonProgressBar value={valueBar} className="progress__bar" />
            </div>
        </IonHeader>
    )
}