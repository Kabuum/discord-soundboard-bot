export async function uploadSoundData(soundData) {
    try {
        const response = await fetch("http://localhost:3000/api/sounds", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(soundData),
        });

        if (!response.ok) {
            throw new Error("Failed to upload sound");
        }

        const result = await response.json();
        console.log("Sound saved:", result);
        return result;
    } catch (err) {
        console.error("Upload error:", err);
    }
}
