"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Contact = () => {
    const [contactedData, setContactedData] = useState([]);


    useEffect(() => {
        const fetchContactedData = async () => {
            try {
                const response = await axios.get("/api/contact");
                setContactedData(response.data.contacts);

            } catch (error) {
                console.log(error.message);
            }
        };

        fetchContactedData();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/contact/${id}`);
            setContactedData(contactedData.filter(contact => contact.id !== id));
        } catch (error) {
            console.log("Error deleting contact:", error.message);
        }
    };



    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Contact Messages</h1>

            {contactedData.length === 0 ? (
                <p className="text-center text-lg text-gray-500">No messages found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {contactedData.map((contact) => (
                        <Card key={contact.id} className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
                            <h2 className="text-xl font-medium text-gray-800 ">{contact.name}</h2>
                            <a href={`mailto:${contact.email}`} className="text-sm text-gray-500  underline -mt-5">{contact.email}</a>
                            <p className="mt-1 text-gray-700">{contact.message}</p>
                            <div className="mt-4 flex justify-end">
                                <Button
                                    variant="destructive"
                                    className="bg-red-600 text-white hover:bg-red-700 flex items-center space-x-2"
                                    onClick={() => handleDelete(contact.id)}
                                >
                                    <AiOutlineDelete className="text-white" />

                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Contact;
