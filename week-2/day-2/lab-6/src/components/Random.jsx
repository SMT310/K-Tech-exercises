import React, { useState } from 'react';

export default function Random() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10);
    const [result, setResult] = useState(null);

    const handleGenerate = () => {
        if (min >= max) {
            alert('Min phải nhỏ hơn Max');
            return;
        }
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setResult(random);
    };

    return (
        <div className="bg-white w-96 p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-4">
                {result !== null ? result : '-'}
            </div>

            <div className="flex flex-col gap-4 mb-6">
                <div className="text-left">
                    <label className="text-sm text-gray-600">Min</label>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(parseInt(e.target.value))}
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 p-1"
                    />
                </div>
                <div className="text-left">
                    <label className="text-sm text-gray-600">Max</label>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(parseInt(e.target.value))}
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 p-1"
                    />
                </div>
            </div>

            <button
                onClick={handleGenerate}
                className="bg-blue-600 text-white px-6 py-2 w-full rounded hover:bg-blue-700 transition"
            >
                GENERATE
            </button>
        </div>
    )
}