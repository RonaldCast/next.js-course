'use client'

import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from './TodoItem'

import * as api from "@/todos/helpers/todos"
import { useRouter } from 'next/navigation'

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({todos = []}: Props) => {

  const router = useRouter()

  const toggleTodo = async (id:string, complete:boolean) =>{
    const updateTodo = await api.updateTodo(id, complete)
    router.refresh(); // to refresh router
    return updateTodo;
  } 

  return (
    <div className='grid grid-cols-1 sm:grd-cols-3 gap-2'>
        {
            todos.map( todo => (
                <TodoItem key={ todo.id } todo={todo} toggleTodo={toggleTodo}/>
            ))
        }
    </div>
  )
}
