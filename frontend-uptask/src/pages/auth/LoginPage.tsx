import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LoginState {
	"email": string;
	"password": string;
}

export const LoginPage = () => {

	const [login, setLogin] = useState<LoginState>({
		"email": '',
		"password": '',
	})


	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">Login and Customize your {''}<span className="text-slate-700">projects</span></h1>

			<form className="my-10 bg-white shadow rounded-lg p-10">

				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
					<input type="email" placeholder="Email" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
				</div>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Passoword</label>
					<input type="password" placeholder="Passoword" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
				</div>

				<button type="submit" className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Login
				</button>

			</form>

			<nav className="lg:flex lg:justify-between">
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to='/auth/register'
				>
					Don't you have an account yet? Register now!
				</Link>
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to='/auth/forget-password'
				>
					Forget your password?
				</Link>
			</nav>
		</>
	)
}
