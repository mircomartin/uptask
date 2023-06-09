import React from 'react'
import { Link } from 'react-router-dom'

export const ForgetPassPage = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">Recover your password</h1>

			<form className="my-10 bg-white shadow rounded-lg p-10">

				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
					<input type="email" placeholder="Email" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
				</div>
				
				<button type="submit" className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Recover
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
					to='/auth/register'
				>
					Don't you have an account yet? Register now!
				</Link>
			</nav>
		</>
	)
}
