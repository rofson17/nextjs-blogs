"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useForm } from "react-hook-form"

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

        console.log(data);
    }


    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className="text-3xl text-blue-500 mb-6">Register</h2>
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
                <Button submit disable={isSubmitting}>Register</Button>
                <div className="mt-4">
                    <p className="text-xs text-gray-500 text-right">Already have an account?
                        <Link className="text-blue-500" href="/login">login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Regiser