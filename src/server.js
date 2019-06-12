import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const app = express();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// Redirect from the old page
app.get([
	'/getting-started',
	'/getting-started/*',
], (req, res) => {
	res.redirect('/guide/getting-started/');
});
app.get([
	'/settings',
	'/settings/*',
], (req, res) => {
	res.redirect('/guide/getting-started/usage/');
});
app.get('/api', (req, res) => {
	res.redirect('/guide/api/');
});
app.get('/validators', (req, res) => {
	res.redirect('/guide/validators/');
});
app.get([
	'/validators/:name',
	'/validators/:name/*',
], (req, res) => {
	const v = req.params.name;
	res.redirect(`/guide/validators/${camelCaseToDash(v)}/`);
});
app.get('/addons', (req, res) => {
	res.redirect('/guide/plugins/');
});
app.get([
	'/addons/:name',
	'/addons/:name/*'
], (req, res) => {
	switch (req.params.name) {
		case 'i18n':
			res.redirect('/guide/plugins/l10n/');
			break;
		case 'mandatoryIcon':
			res.redirect('/guide/plugins/mandatory-icon/');
			break;
		case 'recaptcha1':
		case 'recaptcha2':
			res.redirect('/guide/plugins/recaptcha/');
			break;
		default:
			res.redirect('/guide/plugins/');
			break;
	}
});
app.get([
	'/examples',
	'/examples/*',
], (req, res) => {
	res.redirect('/guide/examples/');
});
app.get('/features/', (req, res) => {
	res.redirect('/#features');
});
app.get('/guide/developing/', (req, res) => {
	res.redirect('/guide/examples/');
});
app.get('/guide/developing/custom-validator/', (req, res) => {
	res.redirect('/guide/examples/creating-a-custom-validator/');
});
app.get('/guide/developing/integration/', (req, res) => {
	res.redirect('/guide/examples/integrating-with-3rd-party-libraries/');
});
app.get([
	'/news',
	'/news/:slug'
], (req, res) => {
	res.redirect('/updates/');
});

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
).listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
