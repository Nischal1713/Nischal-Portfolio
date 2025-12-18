import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "NISCHAL V U";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(intervalId);
                setTimeout(onComplete, 1000);
                
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-blink ml-1">|</span>
            </div>
            <div className="w-50 h-0.5 bg-gray-800 rounded relative overflow-hidden">
                <div
                    className="w-[40%] h-full bg-gray-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"
                ></div>
            </div>
        </div>
    );
};
