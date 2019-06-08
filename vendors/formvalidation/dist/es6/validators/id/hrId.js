import mod11And10 from '../../algorithms/mod11And10';
export default function hrId(value) {
    return {
        meta: {},
        valid: (/^[0-9]{11}$/.test(value) && mod11And10(value)),
    };
}
