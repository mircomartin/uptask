import React from 'react'

export const ConfirmAccountPage = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">Confirm your account</h1>

			<form className="my-10 bg-white shadow rounded-lg p-10">

				<button type="submit" className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Confirm
				</button>

			</form>
		</>
	)
}
