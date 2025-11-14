import { taskModel } from "../../../models";
import { ENV } from "../../../utils";

export class Task{
    create(task:taskModel){
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS,JSON.stringify(task))
    }
}