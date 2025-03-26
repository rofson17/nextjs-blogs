"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { GiNinjaHead } from "react-icons/gi";


const SignIn = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
            isSubmitting
        } } = useForm();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/user/login', data);
            console.log(response.data);

        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="mx-4 w-full md:w-1/4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center flex-col text-2xl md:text-3xl mb-5">
                    <div className="bg-slate-900 rounded-full p-4 text-white">
                        <GiNinjaHead />
                    </div>
                    <h2 className="text-blue-600">Login</h2>
                </div>

                <div>
                    <div className="mb-3">
                        <Input
                            placeholder="Email"
                            {...register("email")}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            placeholder="Password"
                            type="password"
                            {...register("password")}
                        />
                    </div>

                    <Button
                        submit
                        disable={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? "login..." : "Login"}
                    </Button>


                </div>

                <div className="mt-4">
                    <p className="text-xs text-gray-500 text-right">Don't have an account?
                        <Link className="text-blue-500" href="/register">register</Link>
                    </p>
                </div>
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </div>
    )
}

export default SignIn