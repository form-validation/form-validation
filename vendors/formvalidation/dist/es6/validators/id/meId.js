import jmbg from './jmbg';
export default function meId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'ME'),
    };
}
