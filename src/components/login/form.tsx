"use client"
import { checkUser } from "@/app/login/action";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const form = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        telp: '',
        password: ''
    })

    const [formError, setFormError] = useState<{
        telp: string | null,
        password: string | null
    }>({
        telp: null,
        password: null
    })

    const [isUserEmpty, setIsUserEmpty] = useState(true)

    const formValidation = (): Boolean => {
        let telp = ""
        let password = ""
        let isValid = true

        setFormError({
            telp: null,
            password: null
        })

        if (form.telp.trim() == "") {
            telp = "Telp tidak boleh kosong!"
            isValid = false
        }

        if (form.password.trim() == "") {
            password = "Kata sandi tidak boleh kosong!"
            isValid = false
        }

        setFormError({
            telp,
            password
        })

        return isValid
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formValidation()) {
            const check = await checkUser(form.telp, form.password)
            if (check != null) {
                localStorage.setItem("user", check.id.toString())
                router.push("/")
            } else {
                setIsUserEmpty(false)
                return false
            }
        } else {
            return false
        }
    }

    return <form onSubmit={onSubmit} className="flex flex-col w-full px-5 space-y-5">
        <div className="mb-10">
            <h1 className="text-gray-900 font-semibold text-2xl">Masuk</h1>
            <h1 className="text-gray-900 text-xs font-light">Selamat datang di COMPLEO</h1>
        </div>
        <section>
            <div className="flex items-center w-full border-b space-x-2">
                <label htmlFor="" className=" text-sm font-light text-orange-600">
                    +620
                </label>
                <div className="text-yellow-200">|</div>
                <input
                    value={form.telp}
                    onChange={e => setForm({ ...form, telp: e.target.value })}
                    type="number"
                    className=" h-10 w-full border-gray-300 text-sm text-gray-900 focus:outline-none" placeholder="Silahkan masukkan nomor ponsel Anda"
                />
                {/* <input
                    type="number"
                    placeholder="Silahkan masukkan nomor ponsel"
                    className="input input-bordered w-full max-w-xs"
                    value={form.telp}
                    onChange={e => setForm({ ...form, telp: e.target.value })}
                /> */}
            </div>
            {formError.telp ? <label htmlFor="" className="label"><span className="label text-error">{formError.telp}</span></label> : null}
        </section>


        <section>
            <input
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                type="password"
                className=" h-10 w-full border-b text-sm border-gray-200 text-gray-900 focus:outline-none" placeholder="Silahkan masukkan kata sandi"
            />
            {/* <input
                type="password"
                placeholder="Silahkan masukkan kata sandi"
                className="input input-bordered w-full max-w-xs"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
            /> */}
            {formError.password ? <label htmlFor="" className="label"><span className="label text-error">{formError.password}</span></label> : null}
        </section>

        {!isUserEmpty ? <label htmlFor="" className="label"><span className="label-text text-error">Telp atau kata sandi salah!</span></label> : null}
        <button type="submit" className="btn btn-md text-white bg-orange-700 rounded-sm">
            Masuk
        </button>
        <h1 className="text-xs text-center text-gray-500">Tidak ada akun?<Link href="/register" className="text-orange-700">Buat akun</Link></h1>
    </form>
}

export default form