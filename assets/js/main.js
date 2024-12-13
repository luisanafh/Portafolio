import updateCopyRightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import language from './helpers/language.js';

loader();
resetToHome();
updateCopyRightYear();
sendEmail();
language();
