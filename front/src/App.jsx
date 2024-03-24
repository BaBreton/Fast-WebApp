import axios from 'axios'
import './App.css'

function App() {

	const handleClick = () => {
		axios.get('/api/hello/')
		.then(response => {
			alert(response.data.message);
		})
		.catch(error => {
			alert(error.message);
		});
	}

	return (
		<>
			<h1 className='font-bold' >Fast WebApp</h1>
			<h3 className='font-semibold pb-4'>by BaBreton</h3>
			<div className='flex justify-center gap-10'>
				<div className='flex flex-col justify-center bg-blue-400/60 p-2 rounded-lg'>
					<h2 className='underline-offset-2 underline text-xl'>Front</h2>
					<h2>Vite + React</h2>
				</div>
				<div className='flex flex-col justify-center bg-blue-400/60 p-2 rounded-lg'>
					<h2 className='underline-offset-2 underline text-xl'>Back</h2>
					<h2>Django Python + PostgreSQL</h2>
				</div>
			</div>
			<div className="card">
				<button onClick={handleClick}>
					Ask Api
				</button>
			</div>
		</>
	)
}

export default App
