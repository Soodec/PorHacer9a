import { useState, useEffect, useRef, createContext } from 'react'
import { TaskContextTypes } from './TaskContext.type'
import { IonModal, IonContent } from '@ionic/react'
import { TaskForm } from '../../components'
import { taskModel } from '../../models'
import { Task } from './api'
import { size } from 'lodash'


const taskController = new Task()

export const TaskContext = createContext<TaskContextTypes.Context>({
  totalTask: 0,
  totalTaskCompleted: 0,
  tasks: [],
  CompletedTask: [],
  openFormTask: () => { },
  createTask: () => { },
  checkUncheckComplete: () => { }
})

export function TaskProvider(props: TaskContextTypes.Props) {
  const { children } = props
  const modalRef = useRef<HTMLIonModalElement>(null)
  const openFormTask = () => modalRef.current?.present()
  const closeFormTask = () => modalRef.current?.dismiss()
  const [totalTask, setTotalTask] = useState<number>(0)
  const [totalTaskCompleted, setTotalTaskCompleted] = useState<number>(0)
  const [tasks, setTask] = useState<taskModel[]>([])
  const [CompletedTask, setCompletedTask] = useState<taskModel[]>([])
  useEffect(() => {
    obtainTask()
  }, [])

  const createTask = (task: taskModel) => {
    taskController.create(task)
    obtainTask()
  }

  const obtainTask = () => {
    const response = taskController.obtain()
    response.sort(
      (a,b)=> new Date(b.create_at).getTime()-new Date(a.create_at).getTime()
    )
    const taskTemp = response.filter((task)=>!task.completed) 
    const taskCompletedTemp = response.filter((task)=>task.completed)

    setTask(taskTemp)
    setCompletedTask(taskCompletedTemp)
    setTotalTask(size(response))
    setTotalTaskCompleted(size(taskCompletedTemp))

  }
  const checkUncheckComplete = (id:string,check:boolean)=>{
    const newTasks = [...tasks, ...CompletedTask]
    newTasks.filter((task)=>{
      if(task.id === id) task.completed = check
    })
    taskController.changeAllTasks(newTasks)
    obtainTask()
}
  const valueContext: TaskContextTypes.Context = {
    totalTask,
    totalTaskCompleted,
    tasks,
    CompletedTask,
    openFormTask,
    createTask,
    checkUncheckComplete
  }

  return (
    <TaskContext.Provider value={valueContext}>
      {children}
      <IonModal ref={modalRef}
        trigger='open-modal'
        initialBreakpoint={0.35}
        breakpoints={[0, 0.35]}
      >
        <IonContent className='ion-padding'>
          <TaskForm onClose={closeFormTask} />
        </IonContent>
      </IonModal>
    </TaskContext.Provider>
  )
}
