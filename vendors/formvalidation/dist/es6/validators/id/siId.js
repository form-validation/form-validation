import jmbg from './jmbg';
export default function siId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'SI'),
    };
}
