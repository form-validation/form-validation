import mod11And10 from '../../algorithms/mod11And10';
export default function hrVat(value) {
    let v = value;
    if (/^HR[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: mod11And10(v),
    };
}
