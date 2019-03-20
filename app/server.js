import express from 'express';
import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
import App from './App.html';
import camelCaseToDash from '../components/helpers/camelCaseToDash';

const app = express();
const { PORT = 3000 } = process.env;

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
app.get('/developing', (req, res) => {
	res.redirect('/guide/developing/');
});
app.get([
	'/news',
	'/news/:slug'
], (req, res) => {
	res.redirect('/updates/');
});

app.use(
	compression({ threshold: 0 }),
	serve('assets'),
	sapper({
		App,
		routes,
	})
).listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
