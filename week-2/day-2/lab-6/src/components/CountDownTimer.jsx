import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                const sec = parseInt(seconds);
                const min = parseInt(minutes);
                const hr = parseInt(hours);

                if (sec > 0) {
                    setSeconds((prev) => (parseInt(prev) - 1).toString());
                } else if (min > 0) {
                    setMinutes((prev) => (parseInt(prev) - 1).toString());
                    setSeconds('59');
                } else if (hr > 0) {
                    setHours((prev) => (parseInt(prev) - 1).toString());
                    setMinutes('59');
                    setSeconds('59');
                } else {
                    setIsRunning(false);
                    setIsFinished(true);
                    clearInterval(interval);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, hours, minutes, seconds]);

    const startTimer = () => {
        const hr = parseInt(hours);
        const min = parseInt(minutes);
        const sec = parseInt(seconds);
        if (!isNaN(hr) && !isNaN(min) && !isNaN(sec) && (hr > 0 || min > 0 || sec > 0)) {
            setIsRunning(true);
            setIsFinished(false);
        }
    };

    const resetTimer = () => {
        setIsRunning(false);
        setHours('');
        setMinutes('');
        setSeconds('');
        setIsFinished(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex space-x-2 mb-4">
                    <input
                        type="number"
                        className="w-20 p-2 border rounded text-center"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        placeholder="Hours"
                        min="0"
                        disabled={isRunning}
                    />
                    <input
                        type="number"
                        className="w-20 p-2 border rounded text-center"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                        placeholder="Minutes"
                        min="0"
                        max="59"
                        disabled={isRunning}
                    />
                    <input
                        type="number"
                        className="w-20 p-2 border rounded text-center"
                        value={seconds}
                        onChange={(e) => setSeconds(e.target.value)}
                        placeholder="Seconds"
                        min="0"
                        max="59"
                        disabled={isRunning}
                    />
                </div>
                <div className="text-2xl mb-4 font-mono">
                    {String(hours || 0).padStart(2, '0')}:
                    {String(minutes || 0).padStart(2, '0')}:
                    {String(seconds || 0).padStart(2, '0')}
                </div>
                {isFinished && <div className="text-red-500 mb-4 font-bold">Time's Up!</div>}
                <div className="flex space-x-2">
                    <button
                        className="p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
                        onClick={startTimer}
                        disabled={isRunning}
                    >
                        Start
                    </button>
                    <button
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={resetTimer}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountDownTimer;