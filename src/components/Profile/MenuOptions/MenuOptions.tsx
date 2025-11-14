import {useRef} from 'react'
import {
  Camera, 
  CameraPermissionType,
  CameraSource,
  CameraResultType,
} from '@capacitor/camera'
import {useUser} from '../../../hooks'
import {IonModal, IonContent} from '@ionic/react'
import {Options} from './Options'
import {imageOutline, personCircleOutline} from 'ionicons/icons'
import './MenuOptions.scss'
import {ChangeNameForm} from '../ChangeNameForm'

export function MenuOptions() {
  const {onChangeAvatar} = useUser()

  const modalRef = useRef<HTMLIonModalElement>(null)

  const {onChangeUsername} = useUser()

  const opneChangeName = ()=>{
    modalRef.current?.present()
  }
  const openCamera = async()=>{
    const response = await Camera.getPhoto({
      resultType:CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100,
    })
    if(response.webPath){
      onChangeAvatar(response.webPath)
    }
  }
  return (
    <>
      <div className="menu-options-container">
        <Options
        icon={imageOutline}
        title='Cambiar Avatar'
        onClick={openCamera}
        />
        <Options
        icon={personCircleOutline}
        title='Cambiar nombre de usuario'
        onClick={opneChangeName}
        />
        <IonModal
          ref={modalRef}
          trigger='open-modal'
          initialBreakpoint={0.35}
          breakpoints={[0,0.35]}
        >
          <IonContent>
            <ChangeNameForm  />
          </IonContent>
        </IonModal>
      </div>
    </>
  )
}
