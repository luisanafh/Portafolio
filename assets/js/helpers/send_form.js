const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const closeButttonDOM = document.querySelector('#btn_close-modal');
const errorDOM = document.querySelector('#error');
const closeDOM = document.querySelector('#close');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

closeButttonDOM.addEventListener('click', closeModal);

/*function openError() {
	errorDOM.open = true;
}

function closeError() {
	errorDOM.open = false;
}
closeDOM.addEventListener('click', closeError);*/

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		const params = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (params.name && params.email && params.message && params.subject) {
			emailjs.send('service_guf76mb', 'template_8x940er', params).then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					openModal();
				},

				(error) => {
					console.log('FAILED...', error);
				},
			);
		} /* else {
			openError();
		}*/
	});
}

export default sendEmail;
