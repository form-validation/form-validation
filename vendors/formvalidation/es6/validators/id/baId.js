import jmbg from './jmbg';
export default function baId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'BA'),
    };
}
