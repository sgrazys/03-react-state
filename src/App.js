import './App.css';
import { useState } from 'react';

function App() {
	const [shape, setShape] = useState(true);

	const randNum = () => Math.floor(Math.random() * (25 - 5 + 1)) + 5;
	const [num, setNum] = useState(randNum());

	const [number, setNumber] = useState(0);

	return (
		<div className='App'>
			<header className='App-header'>
				<div
					style={{
						border: '2px solid green',
						width: '100px',
						height: '100px',
						borderRadius: shape ? '50%' : '0%',
						marginBottom: '20px',
						lineHeight: `100px`,
					}}
				>
					{number}
				</div>
				<button onClick={() => setShape((e) => !e)}>
					Change shape
				</button>
				<button onClick={() => setNum(randNum)}>Random</button>

				<button onClick={() => setNumber((e) => e + 1)}>+</button>
				<button onClick={() => setNumber((e) => e - 3)}>-</button>
			</header>
		</div>
	);
}

export default App;
