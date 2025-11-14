import React from 'react'
import './ChangeNameForm.scss'
import {ChangeNameFormTypes} from './ChangeNameForm.type'
import {IonInput, IonButton} from '@ionic/react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useUser} from '../../../hooks'

export function ChangeNameForm(props:ChangeNameFormTypes.Props) {
    const {onClose} = props 
    const {onChangeUsername} = useUser()
    const formik = useFormik({
      initialValues:{
        name:''
      },
      validationSchema:Yup.object({
        name:Yup.string().required('danger')
      }),
      onSubmit:(formValue)=>{
        onChangeUsername(formValue.name)
        onClose()
      }
    })
  return (
    <div className='change-name-form'>
      <IonInput placeholder='Nombre de usuario' 
        autofocus
        color={formik.errors.name}
        onIonChange={(e)=>formik.setFieldValue('name', e.detail.value)}
      />
      <IonButton expand='block' onClick={()=>formik.handleSubmit()}>
        Actualizar
      </IonButton>
    </div>
  )
}
