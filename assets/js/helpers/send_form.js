const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const modalErrorDOM = document.querySelector('#modalError');
const closeButttonDOM = document.querySelector('#btn_close-modal');
const closeButttonErrorDOM = document.querySelector('#btn_close-modal-error');

function openModal() {
	modalDOM.open = true;
}

function openModalError() {
	modalErrorDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}
function closeModalError() {
	modalErrorDOM.open = false;
}
document.addEventListener('DOMContentLoaded', () => {
	closeButttonDOM.addEventListener('click', closeModal);
	closeButttonErrorDOM.addEventListener('click', closeModalError);
});

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
		} else {
			openModalError();
		}
	});
}
export default sendEmail;
