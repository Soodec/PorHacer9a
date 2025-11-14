import React from 'react'
import './TaskForm.scss'
import { TaskFormTypes } from './TaskForm.types'
import { IonInput, IonButton, IonSpinner } from '@ionic/react'
import { useFormik } from 'formik'
import { initialValues, validationschema } from './TaskForm.form'
import { v4 as uuidv4 } from 'uuid'

export function TaskForm(props:TaskFormTypes.Props) {
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationschema(),
    onSubmit: (formValue)=>{
      console.log(formValue)
        const data={
          id:uuidv4(),
          description:formValue.task,
          completd:false,
          create_at:new Date(),
        }
        console.log(data)
        onClose()
    }
  })
  const  {onClose} = props
  return (
   <div className="task-form">
    <IonInput placeholder='Descripcion de la tarea'
    onIonChange={(e)=>formik.setFieldValue('task', e.detail.value)}
    color={formik.errors.task}
    />
    <IonButton expand='block' 
    onClick={()=>formik.handleSubmit()}
    >
      {formik.isSubmitting ? <IonSpinner name='crescent' /> : 'Crear'}
    </IonButton>
   </div>
  )
}
