import { Store } from 'svelte/store.js';
import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js';
import App from './App.html';

init({
    target: document.querySelector('#sapper'),
    routes,
    App,
    store: data => {
        return new Store(data);
    },
});

if (navigator.serviceWorker && navigator.serviceWorker.controller) {
	navigator.serviceWorker.controller.onstatechange = function(e) {
		if (e.target.state !== 'redundant') {
			import('./components/TapToReload.html').then(mod => {
				mod.default.show();
			});
		}
	};
}