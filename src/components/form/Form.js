import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = () => {
	const [inputName, changeInputName] = useState('');
	const [inputEmail, changeInputEmail] = useState('');
	const [inputSubject, changeInputSubject] = useState('');
	const [inputPhone, changeInputPhone] = useState(null);

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputName = (e) => {
		changeInputName(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputEmail
	const handleInputEmail = (e) => {
		changeInputEmail(e.target.value);
	}
	// Funcion que se encarga de cambiar el estado del inputEmail
	const handleInputSubject = (e) => {
		changeInputSubject(e.target.value);
	}
	// Funcion que se encarga de cambiar el estado del inputEmail
	const handleInputPhone = (e) => {
		changeInputPhone(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className={styles.formulario}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Your name"
						id="name"
						value={inputName}
						onChange={handleInputName}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						placeholder="Your email"
						id="email"
						value={inputEmail}
						onChange={handleInputEmail}
					/>
				</div>
				<div>
					<label htmlFor="subject">Phone number</label>
					<input
						type="number"
						name="phone"
						placeholder="Phone number"
						id="phone"
						value={inputPhone}
						onChange={handleInputPhone}
					/>
				</div>
				<div>
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						id="subject"
						value={inputSubject}
						onChange={handleInputSubject}
					/>
				</div>
				<button type="submit">Send</button>
			</form>
		</>
	);
}
 
export default Form;