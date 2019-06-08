import jmbg from './jmbg';
export default function mkId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'MK'),
    };
}
