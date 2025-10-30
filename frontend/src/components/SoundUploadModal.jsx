import { useState } from "react";

export default function SoundUploadModal({ isOpen, onClose, onSubmit }) {
    const [name, setName] = useState("");
    const [iconURL, setIconURL] = useState("");
    const [soundURL, setSoundURL] = useState("");

    if (!isOpen){
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, iconURL, soundURL });
        setName("");
        setIconURL("");
        setSoundURL("");
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Sound</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Sound name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Icon URL"
                        value={iconURL}
                        onChange={(e) => setIconURL(e.target.value)}
                        className="border rounded-lg p-2"
                    />
                    <input
                        type="text"
                        placeholder="Sound URL"
                        value={soundURL}
                        onChange={(e) => setSoundURL(e.target.value)}
                        className="border rounded-lg p-2"
                        required
                    />
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}