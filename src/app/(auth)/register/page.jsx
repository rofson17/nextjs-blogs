"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";
import { FaLock } from "react-icons/fa";


const Regiser = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
            isSubmitting
        } } = useForm();


    const onSubmit = async (data) => {
        if (data.password !== data.conformPassword) {
            toast.error('your password and conform password does not match');
            return;
        }
        try {
            const response = await axios.post('/api/user/register', data);
            console.log(response.data);

        } catch (err) {
            console.log(err.message);
        }



    }


    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <form className="mx-4 w-full md:w-1/3" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex justify-center">
                    <div className="bg-fuchsia-600 rounded-full">
                        <FaLock className="text-6xl  text-white  p-3" />
                    </div>
                </div>
                <h2 className="text-3xl text-center text-fuchsia-600 mb-6">Register</h2>


                <div>
                    <label htmlFor="email" className={cn(
                        "font-semibold",
                        errors.email && "text-destructive")}>Email</label>
                    <Input
                        id="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                            required: true,
                            // pattern: {
                            //     value: "^(?=.*[A-Za-z])(?=.*\d).{8,}$",
                            //     message: "invalid email"
                            // }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                </div>
                <div>
                    <label htmlFor="password" className={cn(
                        "font-semibold",
                        errors.password && "text-destructive")}>password</label>
                    <Input
                        id="password"
                        type="password"
                        aria-invalid={errors.password ? "true" : "false"}
                        {...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                                message: "use charecters,numbers minimum 8 "
                            }
                        })}
                    />
                    {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="conformPassword" className={cn(
                        "font-semibold",
                        errors.conformPassword && "text-destructive")}>conform password</label>
                    <Input
                        id="conformPassword"
                        type="password"
                        aria-invalid={errors.conformPassword ? "true" : "false"}
                        {...register("conformPassword", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                                message: "use charecters and numbers minimum 8"
                            }
                        })}
                    />
                    {errors.conformPassword && <p className="text-xs text-destructive">{errors.conformPassword.message}</p>}

                </div>
                <Button submit disable={isSubmitting}>{isSubmitting ? "registering..." : "Register"}</Button>

                <div className="mt-4">
                    <p className="text-xs text-gray-500 text-right">Already have an account?
                        <Link className="text-blue-500" href="/login">login</Link>
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

export default Regiser