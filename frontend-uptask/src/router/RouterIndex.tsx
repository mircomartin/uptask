import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';

export const RouterIndex = () => {
	return (
		<BrowserRouter>
			<PublicRoutes/>
		</BrowserRouter>
	)
}
