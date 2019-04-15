import jmbg from './jmbg';
export default function rsId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'RS'),
    };
}
