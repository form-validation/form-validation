<div class="center mw8 w-100 flex">
    <div class="flex items-center">
        <span class="nowrap f6 fw2 bg-blue white br2 pa1 mr2">v1.4.0</span>
        <a href="/updates/" class="blue dim link">what's new?</a>
    </div>
    <nav class="flex items-center ml-auto">
        <a href="/#features" class="f6 fw6 hover-blue link black-70 mr2 pa3 {path.startsWith('/features')  ? 'b--blue b bt bw1' : ''}" title="Features">Features</a>
        <a href="/download/" class="f6 fw6 hover-blue link black-70 mr2 pa3 {path.startsWith('/download')  ? 'b--blue b bt bw1' : ''}" title="Download">Download</a>
        <a href="/guide/" class="f6 fw6 hover-blue link black-70 mr2 pa3 {_isGuidesPage ? 'b--blue b bt bw1' : ''}" title="Guide">Guide</a>
        <a href="/guide/validators/" class="f6 fw6 hover-blue link black-70 mr2 pa3 {path.startsWith('/guide/validators')  ? 'b--blue b bt bw1' : ''}" title="FormValidation validators">Validators</a>
        <a href="/guide/plugins/" class="f6 fw6 hover-blue link black-70 mr2 pa3 {path.startsWith('/guide/plugins')  ? 'b--blue b bt bw1' : ''}" title="FormValidation plugins">Plugins</a>
        <a href="/guide/examples/" class="f6 fw6 hover-blue link black-70 mr2 pa3 {path.startsWith('/guide/examples')  ? 'b--blue b bt bw1' : ''}" title="FormValidation examples">Examples <HasUpdate /></a>
        <a href="/updates/" class="f6 fw6 hover-blue link black-70 pa3 {path.startsWith('/updates')  ? 'b--blue b bt bw1' : ''}" title="Updates">Updates <HasUpdate /></a>
    </nav>
</div>

<script>
import { onMount } from 'svelte';

import HasUpdate from './HasUpdate.svelte';

let path = '';
let _isGuidesPage = false;
let _isExamplesPage = false;

onMount(() => {
    path = window.location.pathname;
    _isGuidesPage = path.startsWith('/guide')
        && !path.startsWith('/guide/validators')
        && !path.startsWith('/guide/plugins')
        && !path.startsWith('/guide/examples');
});
</script>