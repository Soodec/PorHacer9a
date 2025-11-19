import {useState, useEffect, useRef, createContext} from 'react'
import {TaskContextTypes} from './TaskContext.type' 
import { IonModal, IonContent } from '@ionic/react'
import { TaskForm } from '../../components'
import { taskModel } from '../../models'
import { Task } from './api'

const taskController = new Task()

export const TaskContext = createContext<TaskContextTypes.Context>({
  totalTask:0,
  totalTaskCompleted:0,
  tasks:[],
  CompletedTask:[],
  openFormTask:()=>{},
  createTask:()=>{},
  checkUncheckComplete:()=>{}
})

export function TaskProvider(props:TaskContextTypes.Props) {
  const {children} = props
  const modalRef = useRef<HTMLIonModalElement>(null)
  const openFormTask = ()=>modalRef.current?.present()
  const closeFormTask = ()=>modalRef.current?.dismiss()

  const createTask = (task:taskModel)=>{
    taskController.create(task)
  }

  const valueContext: TaskContextTypes.Context ={
    totalTask:25,
    totalTaskCompleted:9,
    tasks:[],
    CompletedTask:[],
    openFormTask,
    createTask,
    checkUncheckComplete:()=>{}
  }

  return (
    <TaskContext.Provider value={valueContext}>
      {children}
      <IonModal ref={modalRef}
      trigger='open-modal'
      initialBreakpoint={0.35}
      breakpoints={[0,0.35]}
      >
        <IonContent className='ion-padding'>
          <TaskForm onClose={closeFormTask} />
        </IonContent>
      </IonModal>
    </TaskContext.Provider>
  )
}
