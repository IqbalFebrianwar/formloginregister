"use client"
import { registerUser } from "@/app/register/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const form = () => {
    const router = useRouter()
    const [regisSukses, setRegisSukses] = useState(false)

    const [form, setForm] = useState({
        telp: '',
        password: '',
        withdraw_password: ''
    })

    const [formError, setFormError] = useState<{
        telp: null | string,
        password: null | string,
        withdraw_password: null | string
    }>({
        telp: null,
        password: null,
        withdraw_password: null
    })

    const formValidation = (): Boolean => {
        let telp = null
        let password = null
        let withdraw_password = null
        let isValid = true

        if (form.telp.trim() == "") {
            telp = "Telp tidak boleh kosong!"
            isValid = false
        }

        if (form.password.trim() == "") {
            password = "Kata sandi tidak boleh kosong!"
            isValid = false
        }

        if (form.withdraw_password.trim() == "") {
            withdraw_password = "Sandi penarikan tidak boleh kosong!"
            isValid = false
        } else {
            if (form.withdraw_password.length != 6) {
                withdraw_password = "Sandi penarikan harus 6 angka!"
                isValid = false
            }
        }

        setFormError({
            telp,
            password,
            withdraw_password
        })

        return isValid
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormError({
            telp: null,
            password: null,
            withdraw_password: null
        })

        if (formValidation()) {
            await registerUser({
                telp: form.telp,
                password: form.password,
                withdraw_password: form.withdraw_password
            })
            setRegisSukses(true)
        } else {
            return false
        }
    }

    return <div className="flex flex-col space-y-5 w-full px-5">
        <div className="mb-10">
            <h1 className="text-gray-900 font-semibold text-2xl">daftar</h1>
            <h1 className="text-gray-900 text-xs font-light">Selamat datang di COMPLEO</h1>
        </div>
        <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
            {
                regisSukses ? <h1 className="text-xs font-light text-orange-700">Selamat pendaftaran berhasil! <br /> Silahkan Log in</h1> : null
            }
            <div className="flex items-center w-full border-b space-x-2">
                <label htmlFor="" className=" text-sm font-light text-orange-600">
                    +620
                </label>
                <div className="text-yellow-200">|</div>
                <input
                    onChange={e => setForm({ ...form, telp: e.target.value })}
                    value={form.telp}
                    type="number"
                    className=" h-10 w-full border-gray-300 text-sm text-gray-900 focus:outline-none" placeholder="Silahkan masukkan nomor ponsel Anda"
                />
                {/* <input
                    type="number"
                    placeholder="Masukkan nomor ponsel"
                    className="input w-full max-w-xs"
                    onChange={e => setForm({ ...form, telp: e.target.value })}
                    value={form.telp}
                /> */}
            </div>
            {
                formError.telp ? <label htmlFor="" className="label">
                    <span className="label-text text-error">{formError.telp}</span>
                </label> : null
            }
            <input
                onChange={e => setForm({ ...form, password: e.target.value })}
                value={form.password}
                type="password"
                className=" h-10 w-full border-b text-sm border-gray-200 text-gray-900 focus:outline-none" placeholder="Silahkan masukkan kata sandi"
            />
            {/* <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="input input-bordered w-full max-w-xs"
                onChange={e => setForm({ ...form, password: e.target.value })}
                value={form.password}
            /> */}

            {
                formError.password ? <label htmlFor="" className="label">
                    <span className="label-text text-error">{formError.password}</span>
                </label> : null
            }
            <input
                onChange={e => setForm({ ...form, withdraw_password: e.target.value })}
                value={form.withdraw_password}
                type="password"
                className=" h-10 w-full border-b text-sm border-gray-200 text-gray-900 focus:outline-none" placeholder="Silahkan masukkan 6 digit penarikan"
            />
            {/* <input
                type="number"
                placeholder="Masukkan kata sandi penarikan"
                className="input input-bordered w-full max-w-xs"
                onChange={e => setForm({ ...form, withdraw_password: e.target.value })}
                value={form.withdraw_password}
            /> */}

            {
                formError.withdraw_password ? <label htmlFor="" className="label">
                    <span className="label-text text-error">{formError.withdraw_password}</span>
                </label> : null
            }
            <div className="pt-5"></div>
            <button type="submit" className="btn btn-md text-white bg-orange-700 rounded-sm ">Kirim</button>
        </form>
        <h1 className="text-sm text-gray-500 text-center">Sudah punya akun?<Link href="https://www.auscharge.com/login?redirect=/" className="text-orange-700">Log in</Link></h1>
    </div>
}

export default form