import { taskModel } from "../../../models";
import { ENV } from "../../../utils";

export class Task{
    create(task:taskModel){
        const tasks:taskModel[]= this.obtain()
        tasks.push(task)
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS,JSON.stringify(task))
    }

    obtain():taskModel[]{
        const response = localStorage.getItem(ENV.LOCAL_STORAGE.TASKS)
        if(!response) return []
        return JSON.parse(response)
    }
}