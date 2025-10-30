export default function SoundBite({name, iconURL, onClick, soundURL}) {

    return(
        <div className=" text-black bg-white rounded-2xl border-gray-900 w-70 h-20 flex flex-row gap-4 items-center justify-center cursor-pointer border-2 hover:bg-gray-200 transition" onClick={onClick} >
            <img width={"40"} height={"40"} src={iconURL} alt="" className={'rounded-2xl mb-2'} />
            <p className={"text-center"}>{name}</p>
            <SoundPreview soundURL={soundURL}></SoundPreview>
        </div>
    )
}

export function SoundBiteCreate({onClick}) {

    return(
        <div className=" text-black bg-green-200 rounded-2xl border-gray-900 w-40 h-20 flex flex-row gap-4 items-center justify-center cursor-pointer border-2 hover:bg-green-400 transition" onClick={onClick} >
            <p className={"text-center"}>+</p>
        </div>
    )
}

import { useState, useRef } from "react";
import { Modal } from "./Modal";
import CropWaveForm from "./CropWaveForm";

export function SoundPreview({ soundURL }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [startPoint, setStartPoint] = useState(0);
    const [endPoint, setEndPoint] = useState(null);
    const [showCropModal, setShowCropModal] = useState(false);

    // Play the audio within the selected region
    const handlePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(soundURL);
            audioRef.current.addEventListener("ended", () => setIsPlaying(false));
            audioRef.current.addEventListener("timeupdate", () => {
                if (endPoint !== null && audioRef.current.currentTime >= endPoint) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                }
            });
        }
        audioRef.current.currentTime = startPoint;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
                <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                    onClick={() => setShowCropModal(true)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    Crop
                </button>
            </div>

            {showCropModal && (
                <Modal isOpen={showCropModal} onClose={() => setShowCropModal(false)}>
                    <h3 className="font-bold text-lg mb-2">Crop Audio</h3>
                    <CropWaveForm
                        soundURL={soundURL}
                        onChange={({ start, end }) => {
                            setStartPoint(start);
                            setEndPoint(end);
                        }}
                    />
                </Modal>
            )}
        </div>
    );
}

