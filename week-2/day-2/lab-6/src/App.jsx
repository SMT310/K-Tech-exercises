import CountDownTimer from './components/CountDownTimer'
import SimpleCalculator from './components/SimpleCalculator'
import TemperatureConvert from './components/TemperatureConvert'
import TodoList from './components/TodoList'
import Random from './components/Random'
import {useState} from 'react'
export default function App() {
  const [activeApp, setActiveApp] = useState('calculator'); 

  const renderApp = () => {
    switch (activeApp) {
      case 'calculator':
        return <SimpleCalculator />;
      case 'timer':
        return <CountDownTimer />;
      case 'temperature':
        return <TemperatureConvert />;
      case 'todolist':
        return <TodoList />;
      case 'random':
        return <Random />
      default:
        return <SimpleCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col items-center">
      <div className="flex space-x-4 p-4 bg-white shadow-md rounded-lg w-full max-w-md">
        <button
          className={`flex-1 p-2 rounded-md text-white font-semibold ${activeApp === 'calculator' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          onClick={() => setActiveApp('calculator')}
        >
          Simple Calculator
        </button>
        <button
          className={`flex-1 p-2 rounded-md text-white font-semibold ${activeApp === 'timer' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          onClick={() => setActiveApp('timer')}
        >
          CountDown
        </button>
        <button
          className={`flex-1 p-2 rounded-md text-white font-semibold ${activeApp === 'temperature' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          onClick={() => setActiveApp('temperature')}
        >
          Temperature Converter
        </button>
        <button
          className={`flex-1 p-2 rounded-md text-white font-semibold ${activeApp === 'todolist' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          onClick={() => setActiveApp('todolist')}
        >
          Todo List
        </button>
        <button
          className={`flex-1 p-2 rounded-md text-white font-semibold ${activeApp === 'random' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
          onClick={() => setActiveApp('random')}
        >
          Random
        </button>
      </div>
      <div className="mt-4 w-full max-w-md">
        {renderApp()}
      </div>
    </div>
  )
}
