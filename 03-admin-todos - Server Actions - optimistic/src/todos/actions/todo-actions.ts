'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";


const sleep = (second:number) => {
    return new Promise<void> ((resolve) => {
        setTimeout(() => {
            resolve()
        }, second  * 1000)
    })
}


export const toggleTodo = async(id:string, complete:boolean) => {
    const todo = await prisma.todo.findFirst({where:{id}});
    await sleep(3)
    if(!todo){
        throw `Todo con id ${ id } no encontrado`;
    }

    const updatedTodo = await prisma.todo.update({
        where: { id }, 
        data:{ complete }
    })

    //Para poder actualizar la pagina y limpiar la cache revalidatePath([path para revalidar])
    revalidatePath("/dashboard/server-todos")
    return updatedTodo;
}

export const addTodo = async (description: string) => {
    try {
        // create todo 
        //await sleet(3)
        const todo = await prisma.todo.create({
            data: {
                description
            }
        })
        
        revalidatePath("/dashboard/server-todos")
        return todo;
    }catch{
        return {
            message: 'Error creando todo'
        }
    }
}

export const deleteCompleted = async (): Promise<void> => {

    await prisma.todo.deleteMany({
        where:{
            complete: true
        }
    })
    revalidatePath("/dashboard/server-todos")
}


