import React, { useState } from 'react'
import './ListTask.scss'
import { useTaks } from '../../../hooks'
import { map, size } from 'lodash'
import { TaskItem } from '../TaskItem'

export function ListTask() {
    const {tasks , CompletedTask} = useTaks()
  console.log(tasks, CompletedTask)
  return (
    <div>
      <div className="list-task">
        {size(tasks) === 0 && size(CompletedTask) === 0 && (
          <p className='list-task__no-tasks'>No hay tareas, crea una</p>
        )
        }

        {
          size(tasks) > 0 && <h3>Tareas</h3>
        }

        {
          map(tasks,(task)=><TaskItem key={task.id} task={task} />)
        }

        {
          size(CompletedTask) > 0 && <h3>Tareas Completadas</h3>
        }

        {
          CompletedTask.map((task) => <TaskItem key={task.id} task={task} />)
        }
      </div>
    </div>
  )
}
