import {taskModel} from '../../models'

export namespace TaskContextTypes{
    export type Props={
        children: JSX.Element
    }
    export type Context = {
        totalTask:number
        totalTaskCompleted:number
        tasks:taskModel[]
        CompletedTask:taskModel[]
        openFormTask:()=>void
        createTask:(task:taskModel)=>void
        checkUncheckComplete:(id:string, check:boolean)=>void
    }
}