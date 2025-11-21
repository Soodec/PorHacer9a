import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import { Header} from '../components/Header'
import { ListTask } from '../components'

export function Tasks() {
  return (
    <IonPage>
      <Header/>
      <IonContent color="light" fullscreen>
        <IonHeader collapse='condense' >
          <IonToolbar>
            <IonTitle size='large'>Lista De Tareas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ListTask/>
        </IonContent>
      </IonContent>
    </IonPage>
  )
}