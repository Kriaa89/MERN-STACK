import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate();
    };
    return (

    )
}