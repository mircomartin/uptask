import React from 'react'

export const NewPassPage = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">Reset your password</h1>

			<form className="my-10 bg-white shadow rounded-lg p-10">
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">New Passoword</label>
					<input type="password" placeholder="Passoword" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
				</div>
				
				<button type="submit" className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Reset
				</button>

			</form>
		</>
	)
}
