interface AlertProps {
	alert?: string | undefined;
	userCreated?: {
		error: boolean;
		msg: string;
	};
}

export const Alert = ( { alert, userCreated }: AlertProps ) => {

	const classAlert = (): { class: string, msg: string } => {
		if ( alert ) {
			return {
				class: 'from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10',
				msg: alert
			}
		} else if ( userCreated ){
			return {
				class: !userCreated.error ? 'from-sky-400 to-sky-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10' : 'from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10',
				msg: userCreated.msg
			}		
		} else {
			return {
				class: '',
				msg: ''
			}	
		}
	}

	return (
		<div className={ classAlert().class }>
			{ classAlert().msg }
		</div>
	)
}
