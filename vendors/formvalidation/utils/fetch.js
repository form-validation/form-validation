export default function fetch(url, options) {
    const toQuery = (obj) => {
        return Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
    };
    return new Promise((resolve, reject) => {
        const opts = Object.assign({}, {
            crossDomain: false,
            headers: {},
            method: 'GET',
            params: {},
        }, options);
        const params = Object.keys(opts.params)
            .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(opts.params[k])}`)
            .join('&');
        const hasQuery = url.indexOf('?');
        const requestUrl = ('GET' === opts.method) ? `${url}${hasQuery ? '?' : '&'}${params}` : url;
        if (opts.crossDomain) {
            const script = document.createElement('script');
            const callback = `___fetch${Date.now()}___`;
            window[callback] = (data) => {
                delete window[callback];
                resolve(data);
            };
            script.src = `${requestUrl}${hasQuery ? '&' : '?'}callback=${callback}`;
            script.async = true;
            script.addEventListener('load', () => {
                script.parentNode.removeChild(script);
            });
            script.addEventListener('error', () => reject);
            document.head.appendChild(script);
        }
        else {
            const request = new XMLHttpRequest();
            request.open(opts.method, requestUrl);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if ('POST' === opts.method) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            Object.keys(opts.headers).forEach((k) => request.setRequestHeader(k, opts.headers[k]));
            request.addEventListener('load', function () {
                resolve(JSON.parse(this.responseText));
            });
            request.addEventListener('error', () => reject);
            request.send(toQuery(opts.params));
        }
    });
}
