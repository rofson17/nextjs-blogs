"use client"
import React from "react";

const Profile = ({ params }) => {
    const { id } = React.use(params);

    return (
        <div>Profile {id}</div>
    )
}

export default Profile