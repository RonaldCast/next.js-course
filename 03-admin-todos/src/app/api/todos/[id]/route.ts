import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from "yup"
interface Segments {
    params: {
        id: string
    }
}
// the second arg is the params url http://localhost:3000/api/todos/387c7681-266d-4007-840b-93221e8ffe8f 
export async function GET(request: Request, { params }: Segments) {

    const todo = await prisma.todo.findUnique({
        where: {
            id: params.id
        }
    })

    if (!todo) {
        return NextResponse.json({ message: "Todo no encontrado" }, { status: 404 })
    }

    return NextResponse.json({
        ...todo
    })
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})


export async function PUT(request: Request, { params }: Segments) {

    const todo = await prisma.todo.findUnique({
        where: {
            id: params.id
        }
    })

    if (!todo) {
        return NextResponse.json({ message: "Todo no encontrado" }, { status: 404 })
    }

    try {
        const {complete, description} = await putSchema.validate( await request.json());

        const updatedTodo = await prisma.todo.update({
            where: {id: params.id}, 
            data: { complete, description}
        }) 
    
        return NextResponse.json(updatedTodo)
    } catch (error) {
        return NextResponse.json(error, {status:400})
    }
}