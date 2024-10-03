import { useState } from 'react'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateFibonacci = (num) => {
    if (num < 1) return [];
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberInput = Number(inputValue);

    if (isNaN(numberInput) || numberInput <= 0) {
      setError('Por favor, ingresa un número válido mayor que 0.');
      setFibonacciSeries([]);
      return;
    }

    setError('');
    const series = generateFibonacci(numberInput);
    setFibonacciSeries(series);
  };


  return (
    <>
      <div className="fibo">
        <h1>Fibonacci</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ingresa un número"
          />
          <button type="submit">Calcular</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {fibonacciSeries.length > 0 && (
          <div>
            <h2>Serie de Fibonacci:</h2>
            <p>{fibonacciSeries.join(', ')}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
