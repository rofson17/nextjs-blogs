"use client"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/contact", data);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[89vh] bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <p className="text-green-600 text-center">Thank you for your message! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />

              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: "Email is required", })}
                />

              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                />

              </div>
              <Button type="submit" className="w-full" disable={isSubmitting}>Send Message</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
