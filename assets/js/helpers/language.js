function handleLanguageToggle() {
	const languageToggle = document.getElementById('language-toggle');
	const isEnglishPage = window.location.pathname.includes('index-en.html');

	if (languageToggle) {
		languageToggle.checked = isEnglishPage;

		languageToggle.addEventListener('change', () => {
			if (languageToggle.checked) {
				localStorage.setItem('preferredLanguage', 'en');
				window.location.href = 'index-en.html';
			} else {
				localStorage.setItem('preferredLanguage', 'es');
				window.location.href = 'index.html';
			}
		});
	}
}

function applyPreferredLanguage() {
	const preferredLanguage = localStorage.getItem('preferredLanguage');
	const isEnglishPage = window.location.pathname.includes('index-en.html');

	if (preferredLanguage === 'en' && !isEnglishPage) {
		window.location.href = 'index-en.html';
	} else if (preferredLanguage === 'es' && isEnglishPage) {
		window.location.href = 'index.html';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	applyPreferredLanguage();
	handleLanguageToggle();
});
export default addEventListener;
