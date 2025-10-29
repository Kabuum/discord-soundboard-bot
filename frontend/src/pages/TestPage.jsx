import { useEffect, useState } from "react";

export default function TestPage() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:3000/api/test")
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(() => setMessage("Error connecting to backend"));
    }, []);

    return (
        <div>
            <h1>Backend Connection Test</h1>
            <p>{message}</p>
        </div>
    );
}
