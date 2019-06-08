import fetch from '../utils/fetch';
export default function remote() {
    const DEFAULT_OPTIONS = {
        crossDomain: false,
        data: {},
        headers: {},
        method: 'GET',
        validKey: 'valid',
    };
    return {
        validate(input) {
            if (input.value === '') {
                return Promise.resolve({
                    valid: true,
                });
            }
            const opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
            let data = opts.data;
            if ('function' === typeof opts.data) {
                data = opts.data.call(this, input);
            }
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }
            data[opts.name || input.field] = input.value;
            const url = ('function' === typeof opts.url)
                ? opts.url.call(this, input)
                : opts.url;
            return fetch(url, {
                crossDomain: opts.crossDomain,
                headers: opts.headers,
                method: opts.method,
                params: data,
            }).then((response) => {
                return Promise.resolve({
                    message: response.message,
                    meta: response,
                    valid: `${response[opts.validKey]}` === 'true',
                });
            }).catch((reason) => {
                return Promise.reject({
                    valid: false,
                });
            });
        },
    };
}
