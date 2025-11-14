import { IonPage, IonContent } from '@ionic/react'
import { Header } from '../components/Header'

export function Tasks() {
  return (
    <IonPage>
      <Header/>
      <IonContent color="light" fullscreen>
        <p>Tasks</p>
      </IonContent>
    </IonPage>
  )
}