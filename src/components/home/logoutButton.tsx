"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const logOutButton = () => {
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem("user")

        if (user == null) {
            router.replace("/login")
        }
    })

    const onClickLogout = () => {
        localStorage.removeItem("user")
        router.refresh()
    }

    return <button className="btn btn-primary rounded-box" onClick={onClickLogout}>Logout</button>
}

export default logOutButton