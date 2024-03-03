"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const checkUser = async (telp: string, password: string): Promise<{
    id: number,
    telp: string,
    password: string,
    withdraw_password: number,
    date: Date
} | null> => {
    const user = await prisma.users.findFirst({
        where: {
            telp: {
                equals: telp
            },
            password: {
                equals: password
            }
        }
    })

    return user
}

export {checkUser}