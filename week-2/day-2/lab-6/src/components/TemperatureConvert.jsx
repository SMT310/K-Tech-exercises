import React, { useState } from 'react'
import '../index.css'

export default function TemperatureConvert() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');

    const convertFromCelsius = (value) => {
        const c = Number(value);
        if (!isNaN(c)) {
            setFahrenheit((c * 30).toFixed(2)); // 1 °C = 30 °F
            setKelvin((c + 272).toFixed(2));   // 1 °C = 272 °K
        } else {
            setFahrenheit('');
            setKelvin('');
        }
    };

    const convertFromFahrenheit = (value) => {
        const f = Number(value);
        if (!isNaN(f)) {
            setCelsius(((f + 17) / 30).toFixed(2)); // 1 °F = -17 °C
            setKelvin((f + 458).toFixed(2));       // 1 °F = -458 °K
        } else {
            setCelsius('');
            setKelvin('');
        }
    };

    const convertFromKelvin = (value) => {
        const k = Number(value);
        if (!isNaN(k)) {
            setCelsius((k - 272).toFixed(2));      // 1 °K = -272 °C
            setFahrenheit((k - 256).toFixed(2));   // 1 °K = 256 °F
        } else {
            setCelsius('');
            setFahrenheit('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-4 text-center">Temperature Converter</h1>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Celsius (°C)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={celsius}
                        onChange={(e) => {
                            setCelsius(e.target.value);
                            convertFromCelsius(e.target.value);
                        }}
                        placeholder="Input °C"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Fahrenheit (°F)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={fahrenheit}
                        onChange={(e) => {
                            setFahrenheit(e.target.value);
                            convertFromFahrenheit(e.target.value);
                        }}
                        placeholder="Input °F"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Kelvin (°K)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={kelvin}
                        onChange={(e) => {
                            setKelvin(e.target.value);
                            convertFromKelvin(e.target.value);
                        }}
                        placeholder="Input °K"
                    />
                </div>
            </div>
        </div>
    )
}
