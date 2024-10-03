import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from "bcryptjs";

export async function GET(request: Request) {

    await prisma.todo.deleteMany(); // delete * from todo
    await prisma.user.deleteMany()

    const user = await prisma.user.create({
        data: {
            email: "test1@gmail.com",
            password: bcrypt.hashSync("123qwe"),
            roles: ['admin', 'client', 'super-user'],
            todo: {
                create: [
                    { description: "Piedra del alma" },
                    { description: "Piedra del tiempo" },
                    { description: "Piedra del poder", complete: true }
                ]
            }
        }
    })
    // await prisma.todo.createMany({
    //     data:[
    //         {description: "Piedra del alma"},
    //         {description: "Piedra del tiempo"},
    //         {description: "Piedra del poder", complete: true}
    //     ]
    // })

    // await prisma.todo.create({
    //     data: { description: "Piedra del alma" }
    // })

    return NextResponse.json({
        message: "Seed Executed"
    })
}