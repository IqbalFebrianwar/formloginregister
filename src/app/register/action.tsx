"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const registerUser = async ({
    telp,
    password,
    withdraw_password
}: {
    telp: string,
    password: string,
    withdraw_password: string
}) => {
    await prisma.users.create({
        data: {
            telp,
            password,
            withdraw_password: Number(withdraw_password)
        }
    })
}

export { registerUser }