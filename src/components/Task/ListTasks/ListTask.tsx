import React, { useState } from 'react'
import './ListTask.scss'
import { useTaks } from '../../../hooks'
import { map, size } from 'lodash'

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
          tasks.map((task) => (
            <p key={task.id}>{task.description}</p>
          ))
        }

        {
          size(CompletedTask) > 0 && <h3>Tareas Completadas</h3>
        }

        {
          CompletedTask.map((task) => (
            <p key={task.id}>{task.description}</p>
          ))
        }
      </div>
    </div>
  )
}
