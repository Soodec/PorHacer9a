//import {useUser} from "../hooks"
import {IonPage,IonContent} from "@ionic/react"
import {Avatar,TaskInfo,MenuOptions} from '../components/Profile'

export function Settings() {
  //const data = useUser()
  //console.log(data)
  return (
    <IonPage>
      <IonContent>
        <Avatar/>
        <TaskInfo />
        <MenuOptions />
      </IonContent>
    </IonPage>
  )
}
