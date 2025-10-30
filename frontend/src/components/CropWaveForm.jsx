import { useEffect, useRef, useState } from "react";

export default function CropWaveForm({ soundURL, audioRef, onChange }) {
    const audioElRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [region, setRegion] = useState({ start: 0, end: 0 });

    // Initialize audio element
    useEffect(() => {
        if (audioRef?.current) {
            audioElRef.current = audioRef.current;
        } else if (soundURL) {
            audioElRef.current = new Audio(soundURL);
        }

        const audio = audioElRef.current;
        audio.addEventListener("loadedmetadata", () => {
            setRegion({ start: 0, end: audio.duration });
        });
    }, [soundURL, audioRef]);

    // Play/pause audio within the region
    const handlePlayPause = () => {
        const audio = audioElRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.currentTime = region.start;
            audio.play();
            setIsPlaying(true);

            const checkEnd = () => {
                if (audio.currentTime >= region.end) {
                    audio.pause();
                    setIsPlaying(false);
                } else {
                    requestAnimationFrame(checkEnd);
                }
            };
            checkEnd();
        }
    };

    // Update region from sliders
    const handleStartChange = (e) => {
        const start = Math.min(Number(e.target.value), region.end - 0.1);
        setRegion((r) => ({ ...r, start }));
        if (onChange) onChange({ ...region, start });
    };

    const handleEndChange = (e) => {
        const end = Math.max(Number(e.target.value), region.start + 0.1);
        setRegion((r) => ({ ...r, end }));
        if (onChange) onChange({ ...region, end });
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            <div className="flex gap-2 items-center">
                <button
                    className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <span>
          {region.start.toFixed(2)}s - {region.end.toFixed(2)}s
        </span>
            </div>
            <div className="flex flex-col gap-1">
                <label>
                    Start:
                    <input
                        type="range"
                        min="0"
                        max={audioElRef.current?.duration || 0}
                        step="0.01"
                        value={region.start}
                        onChange={handleStartChange}
                        className="w-full"
                    />
                </label>
                <label>
                    End:
                    <input
                        type="range"
                        min="0"
                        max={audioElRef.current?.duration || 0}
                        step="0.01"
                        value={region.end}
                        onChange={handleEndChange}
                        className="w-full"
                    />
                </label>
            </div>
        </div>
    );
}
