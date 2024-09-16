import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany(); // delete * from todo

    await prisma.todo.createMany({
        data:[
            {description: "Piedra del alma"},
            {description: "Piedra del tiempo"},
            {description: "Piedra del poder", complete: true}
        ]
    })

    // await prisma.todo.create({
    //     data: { description: "Piedra del alma" }
    // })

    return NextResponse.json({
        message: "Seed Executed"
    })
}