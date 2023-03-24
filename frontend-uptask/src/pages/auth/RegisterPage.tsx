import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert } from '../../components/ui/Alert';
import axios from 'axios';
import { useState } from 'react';

interface RegisterPageState {
	registerForm: RegisterForm;
	alert: {
		error: boolean;
		msg: string;
	};
}

interface RegisterForm {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export const RegisterPage = () => {

	const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<RegisterPageState["registerForm"]>({});
	const [alert, setAlert] = useState<RegisterPageState["alert"]>({
		error: false,
		msg: ''
	})

	const handleRegister: SubmitHandler<RegisterForm> = async ( data ) => {

		try {
			
			const { data: resp } = await axios.post( `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, {
				nombre: data.name,
				email: data.email,
				password: data.password
			} );
	
			setAlert({
				error: false,
				msg: resp.msg 
			})

			reset({
				name: '',
				email: '',
				password: '',
				password2: '',
			})

		} catch ( error: any ) {

			setAlert({
				error: true,
				msg: error.response.data.msg 
			})

		}

	}

	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">Register and Customize your {''}<span className="text-slate-700">projects</span></h1>
		
			{
				alert.msg !== '' && <Alert userCreated={ alert } />
			}

			<form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit(handleRegister) } noValidate>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Name</label>
					<input 
						{ ...register('name', 
							{ 
								required: 'Name is required',
								minLength: {
									value: 2,
									message: 'The field at least must have 2 characters.'
								} 
							}
						)}
						type="text" placeholder="Name" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>

						<Alert alert={ errors.name?.message } />

				</div>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
					<input 
						{...register('email', 
							{ 
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address"
								}
							}
						)}
						type="email" placeholder="Email" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>

						<Alert alert={ errors.email?.message } />

				</div>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Passoword</label>
					<input 
						{ ...register('password', 
							{ 
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'The field at least must have 6 characters.'
								} 
							}
						)} 
						type="password" placeholder="Passoword" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>

						<Alert alert={ errors.password?.message } />

				</div>
				<div className="my-5">
					<label className="uppercase text-gray-600 block text-xl font-bold">Confirm Passoword</label>
					<input
						 {...register("password2", {
							required: true,
							validate: (val: string) => {
								if (watch('password') != val) {
									console.log('Your passwords do no match')
									return "Your passwords do no match";
								}
							},
						 })}
						type="password" placeholder="Confirm Passoword" className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>

						<Alert alert={ errors.password2?.message } />

				</div>

				<button type="submit" className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Register
				</button>

			</form>

			<nav className="lg:flex lg:justify-between">
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to='/'
				>
					Do you have an account? Login now!
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