import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { ConfirmAccountPage, ForgetPassPage, LoginPage, NewPassPage, RegisterPage } from '../pages/auth';

export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={ <AuthLayout /> }>
				<Route index element={ <LoginPage /> } />
				<Route path='/auth/register' element={ <RegisterPage /> } />
				<Route path='/auth/forget-password' element={ <ForgetPassPage /> } />
				<Route path='/auth/forget-password/:token' element={ <NewPassPage /> }/>
				<Route path='/auth/confirm-account/:id' element={ <ConfirmAccountPage /> } />
			</Route>
		</Routes>
	)
}

